import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  render() {
    return (
      <>
        {/* <h2>this is parent component</h2> */}
        <h1>Users</h1>
        <Child FN="Tony" LN="stark" />
        <Child FN="JAmes" LN="MAry" />
        <Child FN="vikram" LN="rathod" />

      </>
    );
  }
}

export default Parent;
