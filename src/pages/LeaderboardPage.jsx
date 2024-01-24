import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeaderboardList from '../components/LeaderboardList';
import { asyncPopulateLeaderboard } from '../states/leaderBoard/action';

function LeaderboardPage() {
  const {
    leaderboard = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboard());
  }, [dispatch]);

  return (
    <section className="leaderboard-page">
      <LeaderboardList leaderboard={leaderboard} />
    </section>
  );
}

export default LeaderboardPage;
