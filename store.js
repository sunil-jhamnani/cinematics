import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import reducers from './reducers';

const makeStore = (initialState) => createStore(reducers, initialState);

export const wrapper = createWrapper(makeStore);
export default makeStore;
