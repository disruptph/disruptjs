# Multer Minio Storage Engine

Multer storage engine for [Minio](https://github.com/minio/minio) storage.

## Installation

```sh
npm i @disruptph/multer-minio-storage-engine
```

or

```sh
yarn add @disruptph/multer-minio-storage-engine
```

## Usage

```typescript
import express from 'express';
import multer from 'multer';
import Minio from 'minio';
import MinioStorage from '@disruptph/multer-minio-storage-engine';

const app = express();

const minioClient = new Minio.Client({
    // ...
})

const minioStorage = new MinioStorage({
  minio: minioClient,
  bucket: 'my-bucket',
});

const upload = multer({
  storage: minioStorage,
});

app.post('/upload', upload.any(), (req, res) => {
  console.log(req.files);
  res.json(req.files);
});
```

## Custom Filename

By default, filename is set to a random string using [crypto](https://nodejs.org/api/crypto.html) module.

Here's an example on how to set the filename using a uuid:

```typescript
// some other dependencies...
import path from 'path';
import { v4 as uuid } from 'uuid';

const minioClient = new Minio.Client({
    // ...
})

const minioStorage = new MinioStorage({
  minio: minioClient,
  bucket: 'my-bucket',
  filename: async file => uuid() + path.extname(file.originalname),
});
```
