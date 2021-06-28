import { ResourceData, Attributes } from '@disruptph/json-api-normalizer';

type NormalizedData<A> = {
  [id: string]: ResourceData<A>;
};

export type FlatData<A extends Attributes> = ResourceData<A>['attributes'] &
  Omit<ResourceData<A>, 'attributes' | 'relationships'> & {
    // FIXME: Find a way to dynamically set relationship data type
    [relationship: string]: any;
  };

export interface FlatEntities<A extends Attributes = Attributes> {
  [id: string]: FlatData<A>;
}

// This expects a normalized structure from ApiNormalizer.
export const flatten = <A extends Attributes = Attributes>(
  normalizedData: NormalizedData<A>
): FlatEntities<A> => Object.keys(normalizedData).reduce((transformed, entityId) => {
    const { attributes, relationships = {}, id, type } = normalizedData[entityId];

    const associated = Object.keys(relationships).reduce((associated, entity) => {
      const { data } = relationships[entity];
      return {
        ...associated,
        [entity]: data instanceof Array ? data.map(d => d.id) : data?.id || null,
      };
    }, {});

    return {
      ...transformed,
      [entityId]: {
        id,
        type,
        ...associated,
        ...attributes,
      },
    };
  }, {});
