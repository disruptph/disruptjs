---
to: app/javascript/store/entities/<%= h.inflection.pluralize(name) %>/index.ts
---
import * as <%= name %>Action from './actions';
import * as <%= name %>Types from './types';
import <%= name %>Saga from './saga';
import <%= name %>Reducer from './reducer';

export { <%= name %>Saga, <%= name %>Action, <%= name %>Types };

export default <%= name %>Reducer;
