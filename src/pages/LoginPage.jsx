import React from 'react';
import { GoCommentDiscussion } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import GuestAccount from '../components/GuestAccount';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
      <header className="login-page__hero">
        <h1><GoCommentDiscussion /></h1>
        <p className="p-title">Thread App</p>
      </header>
      <article className="login-page__main">

        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?
          {' '}
          <Link to="/register">Register</Link>
        </p>
        <GuestAccount login={onLogin} />
      </article>
    </section>
  );
}

export default LoginPage;
