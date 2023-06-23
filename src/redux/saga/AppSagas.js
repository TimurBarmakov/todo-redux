import { call, put, takeEvery} from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from '../actions/TodoActions';

function usersFetch() {
    return fetch("https://graphqlzero.almansi.me/api", {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify({
          query: `{
            user(id: 1) {
              id
              name
              username
              email
            }
          }`
        })
      }).then(res => res.json())
}

function* workGetUsersFetch() {
    const users = yield call(usersFetch);
    yield put({ type: GET_USERS_SUCCESS, users})
}

function* mySaga() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default mySaga;
