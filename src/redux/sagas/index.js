import { all } from 'redux-saga/effects'
import getDataSaga from './getDataSaga'

export default function* rootSaga() {
  yield all([
    getDataSaga(),
  ])
}