import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentItemShape } from './CommentItem';

function CommentsList({
  comments,
  UpVoteComment,
  DownVoteComment,
  NeutralizeCommentVote,
}) {
  return (
    <div className="comments-list">
      {
         comments.map((comment) => (
           <CommentItem
             key={comment.id}
             {...comment}
             UpVoteComment={UpVoteComment}
             DownVoteComment={DownVoteComment}
             NeutralizeCommentVote={NeutralizeCommentVote}
           />
         ))
      }
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
  UpVoteComment: PropTypes.func.isRequired,
  DownVoteComment: PropTypes.func.isRequired,
  NeutralizeCommentVote: PropTypes.func.isRequired,
};

export default CommentsList;
