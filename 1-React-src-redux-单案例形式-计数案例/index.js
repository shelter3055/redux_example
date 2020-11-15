import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css' //全局引入antd的样式

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.register();
