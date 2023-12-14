import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Ad from "./components/sections/Ad";

import Mac from './components/MyComponents/pages/Mac';
import Ipho from './components/MyComponents/pages/Ipho';
import Ma from './components/sections/Ma';
import Error from './components/error/Error';
import Shared from './components/shared/Shared';
import Product from './components/MyComponents/pages/Product';

import MyCounter from './components/MyComponents/MyCounter';
import CounterDisplayer from './components/MyComponents/CounterDisplayer';
import EvenCounterDisplayer from './components/MyComponents/EvenCounterDisplayer';
import IncreaseDecreaseCounter from './components/MyComponents/IncreaseDecreaseCounter';
import UseEffectForTitle from './components/MyComponents/UseEffectForTitle';
import {Route, Router, Routes} from "react-router-dom";


class App extends Component {
  render(){
  return (
    <div>

      <Routes>
        <Route path='/' element={<Shared/>}>
            <Route path='/' element={<Ma />}/>
            <Route path='iphone' element={<Ipho/>}/>
            <Route path='mac' element={< Mac/>}/>
            <Route path='iphone/:productId' element={<Product/>}/>
            <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>

      {/* <hr/>
      <MyCounter/>
      <br/><br/><br/>
      <IncreaseDecreaseCounter/>
      <br/><br/><br/>
      <UseEffectForTitle/>
      <br/><br/><br/> */}
    </div>
  );
}
}

export default App;