import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./components/Posts";
import Pagination from "./components/Pagination";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const myData = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await myData.json();
      setPosts(jsonData);
      setLoading(false);
    };
    fetchData();
  }, []);

  //   Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (num) => {
    setCurrentPage(num);
  };
  return (
    <div>
      <h1>My List</h1>
      <Post posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
