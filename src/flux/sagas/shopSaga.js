import { FETCH_COLLETIONS_START } from 'flux/actionTypes';
import { takeEvery } from 'redux-saga/effects';

export function* fetchCollectionsAsync() {
	yield console.log('I am fired');
}

export function* fetchCollectionsStart() {
	yield takeEvery(FETCH_COLLETIONS_START, fetchCollectionsAsync);
}
