import React from 'react'
import './App.css';
import Home from  './modules/Home'
import Header from './modules/Header'
import Footer from './modules/Footer'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Searchpage from './modules/search/Searchpage';
// import { Box } from '@mui/system';
function App() {
  return (
    <div className="App">
  <Router>
    <Switch>
    <Route exact path="/searchpage">
        <Searchpage />
      </Route>
    
      <Route path="/">
            <Home />
      </Route>
    </Switch>
  </Router>
    </div>
  );
}

export default App;
