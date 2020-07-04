---
to: app/javascript/store/entities/<%= h.inflection.pluralize(name) %>/selectors.ts
---
import { StoreState } from '@/store/index';

const getIds = (state: StoreState) => state.entities.<%= h.inflection.pluralize(name) %>.all;

export const get<%= h.changeCase.pascalCase(name) %> = (id: string) => (state: StoreState) =>
  state.entities.<%= h.inflection.pluralize(name) %>.byId[id];

export const get<%= h.changeCase.pascalCase(h.inflection.pluralize(name)) %>ByIds = (ids: string[]) => (state: StoreState) =>
  ids.map(id => get<%= h.changeCase.pascalCase(name) %>(id)(state)).filter(item => item);

export const get<%= h.changeCase.pascalCase(h.inflection.pluralize(name)) %> = (state: StoreState) => get<%= h.changeCase.pascalCase(h.inflection.pluralize(name)) %>ByIds(getIds(state))(state);
