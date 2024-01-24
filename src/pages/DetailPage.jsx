import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeThreadVote,

  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeCommentVote,
} from '../states/threadDetail/action';
import { asyncAddComment } from '../states/comments/action';

function DetailPage() {
  const { id } = useParams();
  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onAddComment = (content) => {
    dispatch(asyncAddComment({ content, threadId: id }));
  };

  const onasyncUpVoteThread = () => {
    dispatch(asyncUpVoteThread());
  };

  const onasyncDownVoteThread = () => {
    dispatch(asyncDownVoteThread());
  };

  const onasyncNeutralizeThreadVote = () => {
    dispatch(asyncNeutralizeThreadVote());
  };

  const onasyncUpVoteComment = (commentId) => {
    dispatch(asyncUpVoteComment(commentId));
  };

  const onasyncDownVoteComment = (commentId) => {
    dispatch(asyncDownVoteComment(commentId));
  };

  const onasyncNeutralizeCommentVote = (commentId) => {
    dispatch(asyncNeutralizeCommentVote(commentId));
  };

  let comments;
  if (threadDetail) {
    comments = threadDetail.comments.map((comment) => ({
      ...comment,
      authUser: authUser.id,
    }));
  }

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="detail-page">
      <ThreadDetail
        {...threadDetail}
        authUser={authUser.id}
        UpVoteThread={onasyncUpVoteThread}
        DownVoteThread={onasyncDownVoteThread}
        NeutralizeThreadVote={onasyncNeutralizeThreadVote}
      />
      <CommentInput addComment={onAddComment} />
      <CommentList
        comments={comments}
        UpVoteComment={onasyncUpVoteComment}
        DownVoteComment={onasyncDownVoteComment}
        NeutralizeCommentVote={onasyncNeutralizeCommentVote}
      />
    </section>
  );
}

export default DetailPage;
