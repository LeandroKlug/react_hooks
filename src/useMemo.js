import P from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import './App.css';

const Post = ({ post }) => {
  console.log('Filho renderizado');

  return (
    <div key={post.id} className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    body: P.string,
    title: P.string,
  }),
};

function App() {
  console.log('Pai renderizado');
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  // //componentDidMount
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((response) => setPosts(response));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}

      {posts.length <= 0 && <p>Não existem posts!</p>}
    </div>
  );
}

export default App;
