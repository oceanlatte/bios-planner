import React from "react";
import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

const Profile = () => {
  return (
    <div className="container">
      <Budget />
      <Todo />
    </div>
  );
};

export default Profile;