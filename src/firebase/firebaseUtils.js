import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase/app';

const config = {
	apiKey: 'AIzaSyAXrSG9KV-1DESX2HQ83YhNAGcdZ3H7Qbs',
	authDomain: 'crwn-db-67ddf.firebaseapp.com',
	databaseURL: 'https://crwn-db-67ddf.firebaseio.com',
	projectId: 'crwn-db-67ddf',
	storageBucket: '',
	messagingSenderId: '413981371924',
	appId: '1:413981371924:web:c27f2fdfad83d9d7600101',
	measurementId: 'G-19RM29DVZE'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (err) {
			console.log('Error Creating User', err.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
