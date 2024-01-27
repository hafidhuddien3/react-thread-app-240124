/**
 * @TODO: Define reducer for the threadDetail state
 */

import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.ADD_COMMENT:
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...threadDetail.comments],
      };
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
