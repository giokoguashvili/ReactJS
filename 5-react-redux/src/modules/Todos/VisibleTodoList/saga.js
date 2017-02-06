import { call, put, takeEvery } from 'redux-saga/effects'
import ActionTypes from '../ActionTypes'
import * as api from '../../../js/API'

// (filter)
// .then((response) => receiveTodos(filter, response));

function* fetchTodos(action) {
    const todos = yield call(api.fetchTodos, action.filter);
    yield put({
        type: ActionTypes.RECEIVE_TODOS,
        response: todos
    });
}

function* mySaga() {
    yield takeEvery(ActionTypes.RECEIVE_TODOS, fetchTodos);
}


export default mySaga