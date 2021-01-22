import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App'
// import './index.css'
// import * as serviceWorker from './serviceWorker';
import { themeReducer } from './redux/themeReducer';

const store = createStore(themeReducer);

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root'),
)
// serviceWorker.unregister();
