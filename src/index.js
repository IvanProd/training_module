import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";

// const element = React.createElement('div', {a:2, b:3}, 'Test text');
// const element_one = React.createElement('div', {a:2, b:3}, 'Test', '', 'text');
// const element_two = React.createElement('div', {
//   a:2, 
//   b:3, 
//   children: 'Test text',
// });
// console.log(element);
// console.log(element_one);
// console.log(element_two);


ReactDOM.createRoot(document.getElementById('root')).render(
  // [element, 
  //   element_one, 
  //   element_two
  // ]
    <App />
  )