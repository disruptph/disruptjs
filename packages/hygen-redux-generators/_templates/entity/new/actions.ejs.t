---
to: app/javascript/store/entities/<%= h.inflection.pluralize(name) %>/actions.ts
---
import {
  CALL_<%= h.changeCase.constantCase(name) %>_SERVICE,
  FETCH_<%= h.changeCase.constantCase(h.inflection.pluralize(name)) %>,
  FETCH_<%= h.changeCase.constantCase(name) %>,
  REMOVE_<%= h.changeCase.constantCase(name) %>,
  SUBMIT_<%= h.changeCase.constantCase(name) %>,
} from '@/store/entities/<%= h.inflection.pluralize(name) %>/types';
import { createAction } from '@reduxjs/toolkit';

export const fetch<%= h.changeCase.pascalCase(h.inflection.pluralize(name)) %> = (query: any = {}) => ({
  type: FETCH_<%= h.changeCase.constantCase(h.inflection.pluralize(name)) %>,
  payload: { query },
});

export const submit<%= h.changeCase.pascalCase(name) %> = createAction<any>(SUBMIT_<%= h.changeCase.constantCase(name) %>);
export const remove<%= h.changeCase.pascalCase(name) %> = createAction(REMOVE_<%= h.changeCase.constantCase(name) %>, (id: string) => ({
  payload: { id },
}));
export const callService = createAction(
  CALL_<%= h.changeCase.constantCase(name) %>_SERVICE,
  (name: string, data: any) => ({
    payload: { name, params: data },
  })
);

export const fetch<%= h.changeCase.pascalCase(name) %> = createAction(FETCH_<%= h.changeCase.constantCase(name) %>, (id: string) => ({
  payload: { id },
}));
