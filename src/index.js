import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // komponen, untuk membungkus dengan provider umtuk mengakses fitur store yg sudah dibuat
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    {/* Provider sebagai pembungkus dari file store yg sudah dibuat, agar bisa mengakses fitur tersebut */}
    <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
