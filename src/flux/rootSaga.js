import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from 'flux/sagas/shopSaga';
import { userSagas } from 'flux/sagas/userSaga';

export default function* rootSaga() {
	yield all([call(fetchCollectionsStart), call(userSagas)]);
}
