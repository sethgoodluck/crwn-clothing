import { all, call } from 'redux-saga/effects';

import { cartSagas } from 'flux/sagas/cartSaga';
import { fetchCollectionsStart } from 'flux/sagas/shopSaga';
import { userSagas } from 'flux/sagas/userSaga';

export default function* rootSaga() {
	yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]);
}
