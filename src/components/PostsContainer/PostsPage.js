import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

const PostsPage = () => {
  const [state, setState] = useState(dummyData);
  console.log(state);
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {state.map(post => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostsPage;
