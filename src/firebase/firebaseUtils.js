import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
