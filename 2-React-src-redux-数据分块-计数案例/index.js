import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css' //全局引入antd的样式

//react-redux 里面提供了一个Provider组件，这个组件是用于做跨组件通信
import {Provider} from 'react-redux'
import store from './models'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
