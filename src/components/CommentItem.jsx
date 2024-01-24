import parse from 'html-react-parser';
import React from 'react';
import PropTypes from 'prop-types';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

function CommentItem({
  id, createdAt, owner, upVotesBy, downVotesBy, content, authUser,

  UpVoteComment,
  DownVoteComment,
  NeutralizeCommentVote,

}) {
  const navigate = useNavigate();
  const isCommentVoted = upVotesBy.includes(authUser);
  const isCommentUnvoted = downVotesBy.includes(authUser);

  const onCommentPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/comments/${id}`);
    }
  };

  const contentReact = parse(content);

  return (
    <div role="button" tabIndex={0} className="comment-item" onKeyDown={onCommentPress}>
      <div className="comment-item-header">
        <img src={owner.avatar} alt={owner} />
        <header>
          <div className="comment-item__owner-info">
            <p className="comment-item__owner-name">{owner.name}</p>
            <p className="comment-item__owner-id">
              @
              {owner.id}
            </p>
          </div>
          <p className="comment-item__created-at">{postedAt(createdAt)}</p>
        </header>
      </div>
      <div className="comment-item__detail">

        <article>
          <div className="comment-item__text">{contentReact}</div>
        </article>

        Total Vote:&nbsp;
        {upVotesBy.length + downVotesBy.length}
        <div className="thread-detail-buttons">
          <div className="thread-detail__vote">
            <button type="button" aria-label="vote" onClick={() => UpVoteComment(id)}>
              Up Vote&nbsp;
              { isCommentVoted ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
            </button>
          </div>
          <div className="thread-detail__vote">
            <button type="button" aria-label="vote" onClick={() => NeutralizeCommentVote(id)}>
              Neutralize
            </button>
          </div>
          <div className="thread-detail__vote">
            <button type="button" aria-label="vote" onClick={() => DownVoteComment(id)}>
              Down Vote&nbsp;
              { isCommentUnvoted ? <FaHeart style={{ color: 'black' }} /> : <FaRegHeart />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentItemShape = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,

  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.string.isRequired,

};

CommentItem.propTypes = {
  ...commentItemShape,
  UpVoteComment: PropTypes.func.isRequired,
  DownVoteComment: PropTypes.func.isRequired,
  NeutralizeCommentVote: PropTypes.func.isRequired,
};

export { commentItemShape };

export default CommentItem;
