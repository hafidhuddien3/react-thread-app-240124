import React from 'react';
import PropTypes from 'prop-types';

function GuestAccount({ login }) {
  return (
    <>
      Or use guest account
      <button
        type="button"
        onClick={() => login({
          email: 'shubuhshubuh3@gmail.com',
          password: 'passwordtamu',
        })}
      >
        Use Guest Account
      </button>
    </>
  );
}

GuestAccount.propTypes = {
  login: PropTypes.func.isRequired,
};

export default GuestAccount;
