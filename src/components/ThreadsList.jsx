import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadsList({ threads }) {
  return (
    <div className="threads-list">
      {
         threads.map((thread) => (
           <ThreadItem key={thread.id} {...thread} />
         ))
      }
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadsList;
