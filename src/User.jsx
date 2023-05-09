import React from "react";

const User = (props) => {
  console.log(props);
  const { name, age } = props.data;
  return (
    <div>
      <h1>My name is {name}</h1>
      {/* <h1>My age is {age}</h1> */}
    </div>
  );
};

export default User;
