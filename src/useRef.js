import P from 'prop-types';
import React, { useEffect, useMemo, useState, useRef } from 'react';
import './App.css';

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizado');

  return (
    <div key={post.id} className="post">
      <h2 onClick={() => handleClick(post.title)}>{post.title}</h2>
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
  handleClick: P.func,
};

function App() {
  console.log('Pai renderizado');
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);

  // //componentDidMount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => setPosts(response));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        );
      }, [posts])}

      {posts.length <= 0 && <p>Não existem posts!</p>}
    </div>
  );
}

export default App;
