import thunk from 'redux-thunk';
import { root } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';

export const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));
