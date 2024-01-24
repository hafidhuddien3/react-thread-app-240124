import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadInput from '../components/ThreadInput';
import ThreadsList from '../components/ThreadsList';
import CategorySearchInput from '../components/CategorySearchInput';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncAddThread } from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const [categoryText, setCategoryText] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onAddThread = ({ title, body, category = '' }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  const onKeywordChangeHandler = (keyword) => {
    setCategoryText(keyword);
  };

  const keywordChange = (item) => item.category.toLowerCase().includes(categoryText.toLowerCase());
  const newThreads = threads.filter(keywordChange);

  const threadList = newThreads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <br />
      <div className="two-input">
        <ThreadInput addThread={onAddThread} />
        <br />
        <CategorySearchInput keyword={categoryText} keywordChange={onKeywordChangeHandler} />
      </div>
      <ThreadsList threads={threadList} />
    </section>
  );
}

export default HomePage;
