import React from 'react';
import "./App.css"
import Home from './pages/home';
import Post from './pages/post';
import SinglePost from './pages/singlePost';
import Header from './components/header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/post' exact component={Post}></Route>
      <Route path='/post/:id' exact component={SinglePost}></Route>
      
      </Switch>
      </BrowserRouter>
    </div>
  )
} 

export default App
