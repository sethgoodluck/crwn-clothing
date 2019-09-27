import { EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START } from 'flux/actionTypes';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	auth,
	createUserProfileDocument,
	googleProvider
} from 'utils/firebaseUtils';
import { signInFailure, signInSuccess } from 'flux/actions/userActions';

export function* getSnapShotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument(userAuth));
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (err) {
		yield put(signInFailure(err));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapShotFromUserAuth(user);
	} catch (err) {
		yield put(signInFailure(err));
	}
}

export function* signInwithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapShotFromUserAuth(user);
	} catch (err) {
		put(signInFailure(err));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
	yield takeLatest(EMAIL_SIGN_IN_START, signInwithEmail);
}

export function* userSagas() {
	yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
