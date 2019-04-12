import { combineReducers } from 'redux';
import session from './session_reducer';
import tweets from './tweet_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
  session,
  tweets,
  errors,
});

export default RootReducer;