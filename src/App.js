import React, { useState } from 'react';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InformasiPenduduk from './InformasiPenduduk';
import Navbar from './Navbar';
import DataPenduduk from './DataPenduduk';
import LandingPage from './LandingPage';


const App = () => {  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/informasi">
          <InformasiPenduduk />
        </Route>
        <Route path="/data">
          <DataPenduduk />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
