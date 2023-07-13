import React from 'react'
import ReactDOM  from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App.jsx'
import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import Store from './Redux/index.js';


ReactDOM.createRoot(document.getElementById('root')).render(

   <HashRouter>
     <Provider store={Store}>
      <App />
     </Provider>
   </HashRouter>
 ,
)
