import { combineReducers }  from 'redux';
import { routeReducer }     from 'react-router-redux';
import session              from './session';
import registration         from './registration';
import topics               from './topics';
import posts               from './posts';

export default combineReducers({
  routing: routeReducer,
  session: session,
  registration: registration,
  topics: topics,
  posts: posts,
});
