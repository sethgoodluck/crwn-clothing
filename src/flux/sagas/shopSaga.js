import { call, put, takeEvery } from 'redux-saga/effects';
import {
	convertCollectionsSnapshotToMap,
	firestore
} from 'utils/firebaseUtils';
import {
	fetchCollectionsFailure,
	fetchCollectionsSuccess
} from 'flux/actions/shopActions';

import { FETCH_COLLECTIONS_START } from 'flux/actionTypes';

export function* fetchCollectionsAsync() {
	yield console.log('I am fired');

	try {
		const collectionRef = firestore.collection('collections');
		const snapShot = yield collectionRef.get();
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapShot
		);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (err) {
		yield put(fetchCollectionsFailure(err.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
