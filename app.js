import React from "react";
import ReactDOM from "react-dom/client";

// /* <div id="parent">
//          <div id="child">
//            <h1></h1>
//           </div>
// </div> */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I M hhh tag"),
//     React.createElement("h2", {}, "I M H2 tag"),
//   ])
// );
// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading" },
// //   "Hello World From React!"
// // );
// console.log(parent); // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// React Element=>object=>render=>html element

// const heading = React.createElement("h1", { id: "heading" }, "Namste-React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX
// React Element
const jsxheading = <h1 id="heading">Namste React JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

// Functional Component
// Component Composition
// const Heading = () => (
//   <div>
//     <Jsxheading /> <h1> Functional Component</h1>
//   </div>
// );
// JS in React Component  using this --  "{}"
// const n = 1000;

// const Heading = () => (
//   <div>
//     <h2>{n + n}</h2>
//     <h1> Functional Component</h1>
//   </div>
// );

const Heading = () => (
  <div>
    {jsxheading}
    <h1> Functional Component</h1>
  </div>
);

// Same as Above can be used when there is a single of code

// const Heading1 = () => <h1> Functional Component</h1>;
root.render(<Heading />);
