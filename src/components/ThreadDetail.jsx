import parse from 'html-react-parser';
import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { postedAt } from '../utils';

function ThreadDetail({

  title, body, category, createdAt, owner, upVotesBy, downVotesBy,
  authUser,

  UpVoteThread,
  DownVoteThread,
  NeutralizeThreadVote,

}) {
  const isThreadVoted = upVotesBy.includes(authUser);
  const isThreadUnvoted = downVotesBy.includes(authUser);

  const bodyReact = parse(body);

  return (
    <section className="thread-detail">
      <header className="thread-detail-header">
        <img src={owner.avatar} alt={owner} />
        <div className="thread-detail__owner-info">
          <p className="thread-detail__owner-name">{owner.name}</p>
          <p className="thread-detail__owner-id">
            @
            {owner.id}
          </p>
          <p className="thread-detail__created-at">{postedAt(createdAt)}</p>
        </div>
      </header>
      <article>
        <h4 className="thread-detail__text">{title}</h4>
        <div className="thread-detail__text">{bodyReact}</div>
        <div>
          category:
          {` ${category}`}
        </div>
      </article>
      <footer>
        Total Vote:&nbsp;
        {upVotesBy.length + downVotesBy.length}
        <div className="thread-detail-buttons">
          <div className="thread-detail__vote">
            <button type="button" aria-label="vote" onClick={isThreadVoted ? () => NeutralizeThreadVote() : () => UpVoteThread()}>
              Up Vote&nbsp;
              { isThreadVoted ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
            </button>
          </div>
          <div className="thread-detail__vote">
            <button type="button" aria-label="vote" onClick={() => NeutralizeThreadVote()}>
              Neutralize
            </button>
          </div>
          <div className="thread-detail__vote">
            <button type="button" aria-label="vote" onClick={isThreadUnvoted ? () => NeutralizeThreadVote() : () => DownVoteThread()}>
              Down Vote&nbsp;
              { isThreadUnvoted ? <FaHeart style={{ color: 'black' }} /> : <FaRegHeart />}
            </button>
          </div>
        </div>

      </footer>
    </section>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  owner: PropTypes.shape(ownerShape).isRequired,
  authUser: PropTypes.string.isRequired,

  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,

  UpVoteThread: PropTypes.func.isRequired,
  DownVoteThread: PropTypes.func.isRequired,
  NeutralizeThreadVote: PropTypes.func.isRequired,

};

export default ThreadDetail;
