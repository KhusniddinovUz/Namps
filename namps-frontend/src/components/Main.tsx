import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Admission from './Admission';
import Footer from './Footer';
import Post from './Post';
import { Switch, Route } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <Switch>
      <Route path='/posts/:id'>
        <Navbar />
        <Post />
      </Route>
      <Route exact path='/'>
        <Navbar />
        <Home />
        <About />
        <Admission />
        <Footer />
      </Route>
    </Switch>
  );
};

export default Main;
