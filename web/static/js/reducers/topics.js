import Constants from '../constants';

const initialState = {
  ownedTopics: [],
  // showForm: false,
  // formErrors: null,
  fetching: true
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.TOPICS_FETCHING:
      return { ...state, fetching: true };

    case Constants.TOPICS_RECEIVED:
      return { ...state, ownedTopics: action.ownedTopics, fetching: false };

    default:
      return state;
  }
}
