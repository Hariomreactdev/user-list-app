import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://reqres.in/api/users`;
function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}
function postApi(data) {
  return fetch(apiUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',

      },
      body: JSON.stringify(data)
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function* fetchData(action) {
   try {
      const res = yield call(getApi);
      yield put({type: 'GET_USERS_SUCCESS', users: res?.data||[]});
   } catch (e) {
      yield put({type: 'GET_USERS_FAILED', message: e.message});
   }
}


function* postData(action) {
   try {
      yield call(postApi(action.payload));
   } catch (e) {
      yield put({type: 'SET_USERS_FAILED', message: e.message});
   }
}

function* getDataSaga() {
   yield takeEvery('GET_USERS_REQUESTED', fetchData);
   yield takeEvery('SET_USERS_REQUESTED', postData);
}

export default getDataSaga;