import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function CommentInput({ addComment }) {
  const [text, setText] = useState('');
  const navigate = useNavigate('/');

  function replyCommentHandler() {
    if (text.trim()) {
      addComment(text);
      setText('');
      navigate('/');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <div className="comment-input">
      <div className="char-left">
        <textarea type="text" placeholder=" add comment" value={text} onChange={handleTextChange} />
        <p className="comment-input__char-left">
          <strong>{text.length}</strong>
          /320
        </p>
      </div>
      <button type="submit" onClick={replyCommentHandler}>Add Comment</button>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
