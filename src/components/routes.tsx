import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wishes from "../pages/wishes";
import Header from '../components/header';

export default () => (
  <Router>
    <Header />
    <Route path="/wishes" component={Wishes} />
  </Router>
)