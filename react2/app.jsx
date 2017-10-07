import React from 'react';
import {render} from 'react-dom';
import Profile from './Profile';

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello React hulahuhei!</h1>
//     </div>
//   );
// }
//
const app = document.createElement('div');
document.body.appendChild(app);
// ReactDOM.render(<App />, app);

const props = {
  name: "tinygone",
  age: 30
}

render(<Profile {...props}/>, app);

