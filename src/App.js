import logo from './logo.svg';
import './App.css';
import React from 'react';
import TopMenuBar from '../src/component/topmenubar';
import MenuBar from '../src/component/menubar';
import Product from './component/product';
import Form from './component/form';
function App() {
  return (
    <div className="App">
      <MenuBar/>
      <TopMenuBar/>
     <Product/>
     <Form/>
    </div>
  );
}


export default App;
