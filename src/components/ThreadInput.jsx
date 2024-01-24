import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadInput({ addThread }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  function addthread() {
    if (body.trim()) {
      addThread({ title, body, category });
      setTitle(''); setBody(''); setCategory('');
    }
  }

  function handleTitleChange({ target }) {
    setTitle(target.value);
  }

  function handleBodyChange({ target }) {
    if (target.value.length <= 320) {
      setBody(target.value);
    }
  }

  function handleCategoryChange({ target }) {
    setCategory(target.value);
  }

  return (
    <div className="thread-input">
      <input type="text" placeholder=" title" value={title} onChange={handleTitleChange} />
      <textarea type="text" placeholder=" body thread" value={body} onChange={handleBodyChange} />
      <p className="thread-input__char-left">
        { body.length}
        /320
      </p>
      <input type="text" placeholder=" category" value={category} onChange={handleCategoryChange} />
      <br />
      <button type="submit" onClick={addthread}>Add Thread</button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
