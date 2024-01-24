import parse from 'html-react-parser';
import React from 'react';
import PropTypes from 'prop-types';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

function ThreadItem({
  id, title, body, category, createdAt, upVotesBy,
  totalComments, user, authUser,
}) {
  const navigate = useNavigate();
  const isThreadVoted = upVotesBy.includes(authUser);

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  const bodyReact = parse(body);

  return (
    <div role="button" tabIndex={0} className="thread-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className="thread-item-header">
        <img src={user.avatar} alt={user} />
        <header>
          <div className="thread-item__user-info">
            <p className="thread-item__user-name">{user.name}</p>
            <p className="thread-item__user-id">
              @
              {user.id}
            </p>
          </div>
          <p className="thread-item__created-at">{postedAt(createdAt)}</p>
        </header>
      </div>
      <div className="thread-item__detail">

        <article>
          <h4 className="thread-item__text">{title}</h4>
          <div className="thread-item__text">{bodyReact}</div>
        </article>

        <div className="thread-item__voted">
          <p>

            { isThreadVoted ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
            {' '}
            total up votes:
            {' '}
            {upVotesBy.length}
            {', '}
            total comments:
            {' '}
            {totalComments}
          </p>
        </div>
        <div>
          category:
          {` ${category}`}
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,

  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,

};

ThreadItem.propTypes = {
  ...threadItemShape,
};

ThreadItem.defaultProps = {
};

export { threadItemShape };

export default ThreadItem;
