---
to: app/javascript/store/entities/<%= h.inflection.pluralize(name) %>/saga.ts
---
import { mergeEntities } from '@/store/entities/actions';
import { ActionType } from '@/store/entities/helpers';
import {
  FETCH_<%= h.changeCase.constantCase(h.inflection.pluralize(name)) %>,
  REMOVE_<%= h.changeCase.constantCase(name) %>,
  SUBMIT_<%= h.changeCase.constantCase(name) %>,
  CALL_<%= h.changeCase.constantCase(name) %>_SERVICE,
  FETCH_<%= h.changeCase.constantCase(name) %>,
} from '@/store/entities/<%= h.inflection.pluralize(name) %>/types';
import { ApiClient } from '@disruptph/json-api-utils';
import SagaEvents from '@/utils/SagaEvents';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '@/api';

function* fetch<%= h.changeCase.pascalCase(name) %>(action: ActionType) {
  const { id } = action.payload;
  const data = yield call(api.<%= h.inflection.pluralize(name) %>.getById, id);

  yield put(mergeEntities(data));
}

function* fetch<%= h.changeCase.pascalCase(h.inflection.pluralize(name)) %>(action: ActionType) {
  const data = yield call(ApiClient.get, 'api/<%= h.changeCase.snakeCase(h.inflection.pluralize(name)) %>', action.payload.query);
  yield put(mergeEntities(data));
}

function* submit<%= h.changeCase.pascalCase(name) %>(action: ActionType) {
  const { payload } = action;

  if (payload.id) {
    yield call(update<%= h.changeCase.pascalCase(name) %>, payload);
  } else {
    yield call(create<%= h.changeCase.pascalCase(name) %>, payload);
  }
}

function* create<%= h.changeCase.pascalCase(name) %>(payload: { businessId: string }) {
  const response = yield call(ApiClient.post, '/api/<%= h.changeCase.snakeCase(h.inflection.pluralize(name)) %>', payload, {
    showAlerts: true,
  });
  yield put(mergeEntities(response));
}

function* update<%= h.changeCase.pascalCase(name) %>(payload: { id: string }) {
  const response = yield call(ApiClient.patch, `/api/<%= h.changeCase.snakeCase(h.inflection.pluralize(name)) %>/${payload.id}`, payload, {
    showAlerts: true,
  });

  yield put(mergeEntities(response));
}

function* remove<%= h.changeCase.pascalCase(name) %>(action: ActionType<{ id: string }>) {
  yield call(ApiClient.destroy, `/api/<%= h.changeCase.snakeCase(h.inflection.pluralize(name)) %>/${action.payload.id}`, {
    showAlerts: true,
  });
}

function* callService(action: ActionType<{ name: string; params: any }>) {
  const response = yield call(
    [api.<%= h.inflection.pluralize(name) %>, 'callService'],
    action.payload.name,
    action.payload.params
  );

  yield put(mergeEntities(response));
}

function* <%= name %>Saga() {
  yield takeLatest(FETCH_<%= h.changeCase.constantCase(h.inflection.pluralize(name)) %>, SagaEvents.requestCycle, fetch<%= h.changeCase.pascalCase(h.inflection.pluralize(name)) %>);
  yield takeLatest(FETCH_<%= h.changeCase.constantCase(name) %>, SagaEvents.requestCycle, fetch<%= h.changeCase.pascalCase(name) %>);
  yield takeLatest(SUBMIT_<%= h.changeCase.constantCase(name) %>, SagaEvents.requestCycle, submit<%= h.changeCase.pascalCase(name) %>);
  yield takeLatest(REMOVE_<%= h.changeCase.constantCase(name) %>, SagaEvents.requestCycle, remove<%= h.changeCase.pascalCase(name) %>);
  yield takeLatest(CALL_<%= h.changeCase.constantCase(name) %>_SERVICE, SagaEvents.requestCycle, callService);
}

export default <%= name %>Saga;
