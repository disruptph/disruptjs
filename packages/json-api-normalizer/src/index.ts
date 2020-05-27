import normalizer from 'json-api-normalizer';

interface BaseResourceData {
  id: string;
  type: string;
}

export interface Attributes {
  [attribute: string]: any;
}

export interface ResourceData<A extends Attributes = Attributes>
  extends BaseResourceData {
  attributes: A;
  relationships: {
    [entity: string]: {
      data: BaseResourceData | BaseResourceData[] | null;
    };
  };
}

export interface JsonApiObject<T extends ResourceData | ResourceData[] = ResourceData> {
  data: T;
  // FIXME: needs better typing
  included: ResourceData[];
  meta?: {
    [attribute: string]: any;
  };
}

// https://github.com/yury-dymov/json-api-normalizer#options
export interface Opts {
  endpoint?: boolean;
  filterEndpoint?: boolean;
  camelizeKeys?: boolean;
  camelizeTypeValues?: boolean;
}

export interface NormalizedData {
  [entity: string]: {
    [id: string]: ResourceData;
  };
}

const normalize: (json: JsonApiObject, opts?: Opts) => NormalizedData = normalizer;
export default normalize;
