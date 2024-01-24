import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({
  user, score,
}) {
  return (
    <div role="button" tabIndex={0} className="leaderboard-item">
      <div className="leaderboard-item-header">
        <img src={user.avatar} alt={user} />
        <header>
          <div className="leaderboard-item__user-info">
            <p className="leaderboard-item__user-name">{user.name}</p>
            <p className="leaderboard-item__user-id">
              @
              {user.id}
            </p>
            <p className="leaderboard-item__user-name">{user.email}</p>
          </div>
        </header>
        <div className="leaderboard-item__detail">

          <article>
            <h4 className="leaderboard-item__text">
              {'score: '}
              {score}
            </h4>
          </article>
        </div>
      </div>

    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
};

LeaderboardItem.defaultProps = {
};

export { leaderboardItemShape };

export default LeaderboardItem;
