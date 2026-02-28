import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up useEffect");
      controller.abort();
    }
  }, []);

  const handleGetPostClick = () => {};

  return (
    <>
      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage onGetPostClick={handleGetPostClick} />
      )}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
