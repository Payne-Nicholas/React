// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
class Header extends Component {
    render() {
        return (
            <div>
                <h1>React 小书</h1>
            </div>
        );
    }
}
ReactDOM.render(<Header />, document.getElementById('root'));
