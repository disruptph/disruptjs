---
to: app/javascript/store/entities/<%= h.inflection.pluralize(name) %>/types.ts
---
export const FETCH_<%= h.changeCase.constantCase(h.inflection.pluralize(name)) %> = 'FETCH_<%= h.changeCase.constantCase(h.inflection.pluralize(name)) %>';
export const FETCH_<%= h.changeCase.constantCase(name) %> = 'FETCH_<%= h.changeCase.constantCase(name) %>';
export const ADD_<%= h.changeCase.constantCase(name) %> = 'ADD_<%= h.changeCase.constantCase(name) %>';
export const SUBMIT_<%= h.changeCase.constantCase(name) %> = 'SUBMIT_<%= h.changeCase.constantCase(name) %>';
export const REMOVE_<%= h.changeCase.constantCase(name) %> = 'REMOVE_<%= h.changeCase.constantCase(name) %>';
export const CALL_<%= h.changeCase.constantCase(name) %>_SERVICE = 'CALL_<%= h.changeCase.constantCase(name) %>_SERVICE';
