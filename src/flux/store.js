import { applyMiddleware, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { fetchCollectionsStart } from 'flux/sagas/shopSaga';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

export default { store, persistor };
