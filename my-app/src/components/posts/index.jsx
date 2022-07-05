import './styles.css';

import { Post } from '../post';

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <Post
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);

