import React from 'react';
import ScanImage from './ScanImage';
import { Button } from 'antd';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Image } from 'antd';

const { Header, Content, Footer } = Layout;
function buttonClick(){
  alert("hi"); 
}
const App = () => (
  <div className="App">
    <div></div>
    <ScanImage></ScanImage>
  </div>
);

export default App;