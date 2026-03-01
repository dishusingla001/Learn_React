import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (posts) => posts.id != action.payload.Postid,
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAUT_POST_LIST,
  );

  const addPost = (userId, postTitle, postBody, postReactions, tags) => {
    const addNewPostAction = {
      type: "ADD_POST",
      payload: {
        id: crypto.randomUUID(),
        title: postTitle,
        body: postBody,
        reactions: postReactions,
        userId: userId,
        tags: tags,
      },
    };

    dispatchPostList(addNewPostAction);
  };

  const addInitialPost = (posts) => {
    const addNewPostAction = {
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    };

    dispatchPostList(addNewPostAction);
  };

  const deletePost = useCallback(
    (Postid) => {
      const deletePostAction = {
        type: "DELETE_POST",
        payload: {
          Postid,
        },
      };

      dispatchPostList(deletePostAction);
    },
    [dispatchPostList],
  );

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPost, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAUT_POST_LIST = [];

export default PostListProvider;
