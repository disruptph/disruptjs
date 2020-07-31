---
to: app/javascript/store/entities/<%= h.inflection.pluralize(name) %>/reducer.ts
---
import { <%= h.changeCase.pascalCase(name) %> } from '@/schemas/<%= h.changeCase.pascalCase(name) %>';
import {
  addEntity,
  createInitialEntityState,
  removeEntity,
} from '@/store/entities/helpers';
import { ADD_<%= h.changeCase.constantCase(name) %>, REMOVE_<%= h.changeCase.constantCase(name) %> } from '@/store/entities/<%= h.inflection.pluralize(name) %>/types';
import { createReducer } from '@reduxjs/toolkit';

const initialState = createInitialEntityState<<%= h.changeCase.pascalCase(name) %>>();

export default createReducer(initialState, {
  [ADD_<%= h.changeCase.constantCase(name) %>]: (state, action) => addEntity(state, action.payload),
  [REMOVE_<%= h.changeCase.constantCase(name) %>]: (state, action) => removeEntity(state, action.payload.id),
});
