/**
 * @TODO: Define all the actions (creator) for the threadDetail state
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function asyncReceiveThreadDetail(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());

    try {
      const threadDetail = await api.getThreadDetail(id);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThread() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail } = getState();

    try {
      await api.upVoteThread(threadDetail.id);
      const newthreadDetail = await api.getThreadDetail(threadDetail.id);
      dispatch(receiveThreadDetailActionCreator(newthreadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThread() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail } = getState();
    try {
      await api.downVoteThread(threadDetail.id);
      const newthreadDetail = await api.getThreadDetail(threadDetail.id);
      dispatch(receiveThreadDetailActionCreator(newthreadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeThreadVote() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail } = getState();
    try {
      await api.neutralizeThreadVote(threadDetail.id);
      const newthreadDetail = await api.getThreadDetail(threadDetail.id);
      dispatch(receiveThreadDetailActionCreator(newthreadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail } = getState();

    try {
      await api.upVoteComment(threadDetail.id, commentId);
      const newthreadDetail = await api.getThreadDetail(threadDetail.id);
      dispatch(receiveThreadDetailActionCreator(newthreadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail } = getState();
    try {
      await api.downVoteComment(threadDetail.id, commentId);

      const newthreadDetail = await api.getThreadDetail(threadDetail.id);
      dispatch(receiveThreadDetailActionCreator(newthreadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeCommentVote(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail } = getState();
    try {
      await api.neutralizeCommentVote(threadDetail.id, commentId);
      const newthreadDetail = await api.getThreadDetail(threadDetail.id);
      dispatch(receiveThreadDetailActionCreator(newthreadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function asyncAddComment({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncReceiveThreadDetail,

  addCommentActionCreator,
  asyncAddComment,

  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeThreadVote,

  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeCommentVote,
};
