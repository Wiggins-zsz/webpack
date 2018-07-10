import { createStore, applyMiddleware } from 'redux';
import thunkMiddlewate from 'redux-thunk';
import { createLogger } from 'redux-logger';
import todo from './reducer.js';

const loggerMiddleware = createLogger();

export default function configureStore(preloadState) {
	return createStore(
		todo,
		preloadState,
		applyMiddleware(
			thunkMiddlewate,
			loggerMiddleware
		)
	)
}