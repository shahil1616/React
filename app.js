import React from "react";
import ReactDOM from "react-dom/client";

/* <div id="parent">
         <div id="child">
           <h1></h1> 
          </div>
</div> */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I M hhh tag"),
    React.createElement("h2", {}, "I M H2 tag"),
  ])
);
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React!"
// );
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
