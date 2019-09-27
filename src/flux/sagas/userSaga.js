import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	auth,
	createUserProfileDocument,
	googleProvider
} from 'utils/firebaseUtils';
import {
	googleSignInFailure,
	googleSignInSuccess
} from 'flux/actions/userActions';

import { GOOGLE_SIGN_IN_START } from 'flux/actionTypes';

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDocument(user));
		const userSnapshot = yield userRef.get();
		yield put(
			googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (err) {
		yield put(googleSignInFailure(err));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
	yield all([call(onGoogleSignInStart)]);
}
