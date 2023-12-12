import React from "react";
import { useSelector } from "react-redux";

const User = () => {

  const user = useSelector((state) => state.userReducer)
  console.log(user[0]);

  return (
    <div className="user-container">
      <div className="user">
        <h3>{user.length && user[0].pseudo}</h3>
        <img src="./img/bill-gates.png" alt="bill gates" />
        <p>Age : {user.length && user[0].age} ans</p>
        <p>Like{user.length && user[0].likes > 1 ? "s" : ""} : {user.length && user[0].likes}</p>
      </div>
    </div>
  );
};

export default User;
