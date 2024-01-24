/**
 * @TODO: Define all the actions (creator) for the leaderboard state
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

function receiveLeaderboardActionCreator(leaderboard) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboard,
    },
  };
}

function asyncPopulateLeaderboard() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboard = await api.seeLeaderboards();
      dispatch(receiveLeaderboardActionCreator(leaderboard));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveLeaderboardActionCreator,
  asyncPopulateLeaderboard,
};
