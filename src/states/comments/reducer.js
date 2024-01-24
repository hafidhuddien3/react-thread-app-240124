/**
 * @TODO: Define the reducer for the comments state
 */

import { ActionType } from './action';

function commentsReducer(comments = [], action = {}) {
  switch (action.type) {
    case ActionType.ADD_COMMENT:
      return [action.payload.comment, ...comments];
    default:
      return comments;
  }
}

export default commentsReducer;
