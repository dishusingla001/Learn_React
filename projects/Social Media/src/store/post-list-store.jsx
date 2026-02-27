import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "ADD_POST") {
    const Post = {
      id: crypto.randomUUID(),
      title: action.payload.postTitle,
      body: action.payload.postBody,
      reactions: action.payload.postReactions,
      userId: action.payload.userId,
      tags: action.payload.tags,
    };
    newPostList = [Post,...currPostList];
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (posts) => posts.id != action.payload.Postid,
    );
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
        userId,
        postTitle,
        postBody,
        postReactions,
        tags,
      },
    };

    dispatchPostList(addNewPostAction);
  };

  const deletePost = (Postid) => {
    const deletePostAction = {
      type: "DELETE_POST",
      payload: {
        Postid,
      },
    };

    dispatchPostList(deletePostAction);
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAUT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacations", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Understanding useReducer",
    body: "useReducer is very useful for managing complex state logic in large applications.",
    reactions: 8,
    userId: "user-12",
    tags: ["react", "hooks", "useReducer"],
  },
];

export default PostListProvider;
