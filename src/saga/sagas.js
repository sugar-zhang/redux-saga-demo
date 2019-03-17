import { all, put, select, take, fork, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'


function* getList () {
  const list = yield call(() => axios.get('http://jsonplaceholder.typicode.com/users').then(r => r.data))
  yield put({ type: 'getList', list })
}

function* listenInit () {
  yield takeEvery('userList/init', getList)
}

function* removeUser (action) {
  const result = yield call((id) => axios.get(`http://jsonplaceholder.typicode.com/users/${id}`), action.id)
  yield put({ type: 'removeUser', id: action.id })
}

function* listenRemove () {
  yield takeEvery('userList/remove', removeUser)
}

function getCount (state) {
  return state.users.count
}

function* watchIncrement () {
  while (1) {
    let count = yield select(getCount)
    console.log(count)
    yield take('increment')
  }
}

export default function* rootSaga () {
  yield all([
    listenInit(),
    listenRemove(),
    fork(watchIncrement),
  ])
}