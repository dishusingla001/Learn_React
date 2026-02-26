import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "ADD_POST") {
    newPostList = [...currPostList, action.payload];
  } else if (action.type === "DELTE_POST") {
    newPostList = currPostList.filter((posts) => {
      return posts != action.payload;
    });
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,DEFAUT_POST_LIST);

  const addPost = () => {
    const addNewPostAction = {
      type: "ADD_POST",
      payload: post,
    };

    dispatchPostList(addNewPostAction);
  };

  const deletePost = () => {
    const deletePostAction = {
      type: "DELETE_POST",
      payload: post,
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
    tags: ["vacations", "Mumbai", "Enjoying"]
  },
  {
    id: 2,
    title: "Understanding useReducer",
    body: "useReducer is very useful for managing complex state logic in large applications.",
    reactions: 8,
    userId: "user-12",
    tags: ["react", "hooks", "useReducer"]
  }
];

export default PostListProvider;
