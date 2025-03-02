//CLI: npm install axios --save
import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import MyProvider from './contexts/MyProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <MyProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </MyProvider>
    );
  }
}


export default App;