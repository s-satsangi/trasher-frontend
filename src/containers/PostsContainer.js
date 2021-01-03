import React, { useState, useEffect } from "react";

import Feed from "../components/Feed";
import PostLayout from "./PostLayout";

export default function PostsContainer(props) {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [nextHref, setNextHref] = useState(null);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const getPosts = () => {
    let postsRequest;
    const postsLength = posts ? posts.length : 0;
    fetch(
      `http://localhost:3000/posts/index/${postsLength}`,
      {
        credentials: "include",
        // headers: {
        //   'Authorization':true
        // }
      },
      {
        // client_id: api.client_id,
        linked_partitioning: 1,
        page_size: 10,
      },
      {
        cache: true,
      }
    )
      .then((data) => {
        return data.json();
      })
      .catch(err=>{console.log(err)
      throw(`${err}`)
      })
      .then((json) => {
        postsRequest = json.map((post) => {
          return (
            <PostLayout
              likes={post.likes}
              comments={post.comments}
              postId={post.id}
              user={post.user_id}
              key={post.id}
              image={post.image}
              location={post.locaiton}
              text={post.text}
              date={post.created_at}
            />
          );
        });
        const currentPosts = posts ? posts.slice() : [];
        setPosts([...currentPosts, ...postsRequest]);
      });
  };
  return <Feed data={posts} getData={getPosts} hasMore={hasMore} />;
}
