import { call, put, takeEvery, all } from 'redux-saga/effects';
import UserActionTypes from '../actions/users/constants';
import usersService from '../api/users.service';
import {
  fetchUsersSuccess,
  fetchUsersError
} from '../actions/users/users';

export function* fetchUsersSaga() : any {
  try {
    const response = yield call(usersService.getUsers);
    console.log(response);
    yield put(fetchUsersSuccess(response))
  } catch(e) {
    yield put(fetchUsersError());
  }
}

export function* usersSaga() {
  yield all([
    takeEvery(UserActionTypes.FETCH_USERS, fetchUsersSaga),
  ]);
}