import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostLike } from "../actions/post.action";
import { addUserLike } from "../actions/user.action";

const Like = ({ post }) => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.userReducer)
  console.log(user);

  const handleLike = () => {

    const postData = {
      title: post.title,
      author: post.author,
      id: post.id,
      content: post.content,
      likes: post.likes + 1
    }

    const userData = {
      pseudo: user[0].pseudo,
      likes: user[0].likes + 1,
      age: user[0].age,
      id: user[0].id
    }
    console.log(user[0].likes);

    dispatch(addPostLike(postData))
    dispatch(addUserLike(userData))

  }

  return (
    <div>
      <img src="./icons/clap.png" className="clap" alt="clap" onClick={() => handleLike()} />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
