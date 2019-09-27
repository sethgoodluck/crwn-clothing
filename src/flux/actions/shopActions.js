import {
	FETCH_COLLECTIONS_FAILURE,
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS
} from 'flux/actionTypes';
import {
	convertCollectionsSnapshotToMap,
	firestore
} from 'utils/firebaseUtils';

export const fetchCollectionsStart = () => ({
	type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = message => ({
	type: FETCH_COLLECTIONS_FAILURE,
	payload: message
});

export const fetchCollectionsStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection('collections');
		dispatch(fetchCollectionsStart());

		collectionRef
			.get()
			.then(snapshot => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionsMap));
			})
			.catch(error => dispatch(fetchCollectionsFailure(error.message)));
	};
};
