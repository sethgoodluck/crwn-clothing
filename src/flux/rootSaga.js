import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from 'flux/sagas/shopSaga';

export default function* rootSaga() {
	yield all([call(fetchCollectionsStart)]);
}
