import Constants              from '../constants';
import { push }               from 'react-router-redux';
import { httpGet, httpPost }  from '../utils';

const Actions = {
  fetchTopics: () => {
    return dispatch => {
      dispatch({ type: Constants.TOPICS_FETCHING });

      httpGet('/api/v1/topics')
      .then((data) => {
        dispatch({
          type: Constants.TOPICS_RECEIVED,
          ownedTopics: data.owned_topics,
          invitedTopics: data.invited_topics,
        });
      });
    };
  },
};

export default Actions;
