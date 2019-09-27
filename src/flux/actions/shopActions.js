import { UPDATE_COLLECTIONS } from 'flux/actionTypes';

export const updateCollections = collectionsMap => ({
	type: UPDATE_COLLECTIONS,
	payload: collectionsMap
});
