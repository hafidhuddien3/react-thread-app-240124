import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardItemShape } from './LItem';

function LeaderboardList({ leaderboard }) {
  return (
    <div className="leaderboard-list">
      {
         leaderboard.map((item) => (
           <LeaderboardItem key={item.user.id} {...item} />
         ))
      }
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboard: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default LeaderboardList;
