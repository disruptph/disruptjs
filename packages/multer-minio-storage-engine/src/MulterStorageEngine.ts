import crypto from 'crypto';
import { Request } from 'express';
import { Client } from 'minio';
import { StorageEngine } from 'multer';

type GetFilnameFn = (file: Express.Multer.File) => Promise<string>;

interface Options {
  minio: Client;
  bucket: string;
  filename?: GetFilnameFn;
}

const defaultGetFilename: GetFilnameFn = async () =>
  crypto.randomBytes(16).toString('hex');

export class MinioStorage implements StorageEngine {
  private readonly client: Client;
  private readonly bucket: string;

  private readonly getFilename: GetFilnameFn = async () =>
    crypto.randomBytes(16).toString('hex');

  constructor ({
    minio,
    bucket,
    filename: getFilename = defaultGetFilename,
  }: Options) {
    this.client = minio;
    this.bucket = bucket;
    this.getFilename = getFilename;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  _handleFile = async (
    _: Request,
    file: Express.Multer.File,
    cb: (err: Error | null, info?: Partial<Express.Multer.File>) => void
  ) => {
    const filename = await this.getFilename(file);

    try {
      await this.client.putObject(
        this.bucket,
        filename,
        file.stream,
        file.size,
        {
          'Content-Type': file.mimetype,
        }
      );
      cb(null, { filename });
    } catch (err) {
      cb(err);
    }
  };

  // eslint-disable-next-line @typescript-eslint/naming-convention
  _removeFile = () => {
    // TODO
  };
}
