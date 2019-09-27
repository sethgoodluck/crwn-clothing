import {
	CHECK_USER_SESSION,
	EMAIL_SIGN_IN_START,
	GOOGLE_SIGN_IN_START,
	SIGN_OUT_START
} from 'flux/actionTypes';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	auth,
	createUserProfileDocument,
	getCurrentUser,
	googleProvider
} from 'utils/firebaseUtils';
import {
	signInFailure,
	signInSuccess,
	signOutFailure,
	signOutSuccess
} from 'flux/actions/userActions';

export function* getSnapShotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth);
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

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();

		if (!userAuth) return;
		yield getSnapShotFromUserAuth(userAuth);
	} catch (err) {
		yield put(signInFailure(err));
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess);
	} catch (err) {
		yield put(signOutFailure(err));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
	yield takeLatest(EMAIL_SIGN_IN_START, signInwithEmail);
}

export function* onCheckUserSession() {
	yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
	yield takeLatest(SIGN_OUT_START, signOut);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(isUserAuthenticated),
		call(onSignOutStart)
	]);
}
