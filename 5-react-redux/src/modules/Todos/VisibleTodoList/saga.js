import { call, put, takeEvery } from 'redux-saga/effects'
import ActionTypes from '../ActionTypes'
import * as api from '../../../js/API'

// (filter)
// .then((response) => receiveTodos(filter, response));

function* fetchTodos(action) {
    console.log(action)
    const todos = yield call(api.fetchTodos, action.filter);
    yield put({
        type: ActionTypes.RECEIVE_TODOS,
        fiter: action.filter,
        response: todos
    });
}

function* mySaga() {
    console.log(ActionTypes.FETCH_TODOS)
    yield takeEvery(ActionTypes.FETCH_TODOS, fetchTodos);
}


export default mySaga