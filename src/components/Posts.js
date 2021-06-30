import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <div>
      <ul className="list-group">
        {posts.map((post, index) => {
          return (
            <li key={index} className="list-group-item">
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
