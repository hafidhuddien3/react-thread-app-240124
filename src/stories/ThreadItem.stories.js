import './style.css';
import ThreadItem from '../components/ThreadItem';

const story = {
  title: 'ThreadItem',
  component: ThreadItem,
};

export default story;

const contohThreadPertama = {
  args: {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: ['users-auth'],
    totalComments: 0,

    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://ui-avatars.com/api/?name=John Doe&background=random',
    },
    authUser: 'users-auth',
    handleClick: () => { alert('click'); },
  },
};

const contohThreadKedua = {};
contohThreadKedua.args = {
  id: 'thread-2',
  title: 'Thread Kedua',
  body: 'Ini adalah thread kedua',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-2',
  upVotesBy: [],
  totalComments: 1,
  user: {
    id: 'users-2',
    name: 'Jane Mustang',
    email: 'jane@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Jane Mustang&background=random',
  },
  authUser: 'users-auth',
  handleClick: () => { alert('berhasil ditekan'); },
};

export {
  contohThreadPertama,
  contohThreadKedua,
};
