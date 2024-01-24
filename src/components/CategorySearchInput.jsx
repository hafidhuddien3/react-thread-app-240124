import React from 'react';
import PropTypes from 'prop-types';

function CategorySearchInput({ keyword, keywordChange }) {
  function handleTextChange({ target }) {
    keywordChange(target.value);
  }

  return (
    <div className="categorySearch-input">
      <input
        type="text"
        placeholder=" categorySearch"
        value={keyword}
        onChange={handleTextChange}
      />
    </div>
  );
}

CategorySearchInput.propTypes = {
  keyword: PropTypes.string.isRequired, keywordChange: PropTypes.func.isRequired,
};

export default CategorySearchInput;
