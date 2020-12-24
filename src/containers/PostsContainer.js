import React, { useState, useEffect } from "react";

import Feed from "../components/Feed";
import PostLayout from "./PostLayout";

export default function PostsContainer(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const getPosts = () => {
    let postsRequest;
    const postsLength = posts ? posts.length : 0;
    fetch(
      `http://localhost:3000/posts/${postsLength}`,
      {
        // client_id: api.client_id,
        linked_partitioning: 1,
        page_size: 10,
      },
      {
        cache: true,
      }
    )
      .then((data) => data.json())
      .then((json) => {
        postsRequest = json.map((post) => {
          return (
            <PostLayout
              key={post.id}
              image={post.image}
              location={post.locaiton}
              text={post.text}
              date={post.created_at}
            />
          );
        });
        setPosts(postsRequest);
      });
  };
  return <Feed data={posts} getData={getPosts} />;
}
