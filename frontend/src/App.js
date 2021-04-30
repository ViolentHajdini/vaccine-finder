import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Nav from './nav/nav';
import Home from './Pages/Home'
import FindVaccine from './Pages/Finder/findvaccine'
import Component from './components/Login/component';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
            <Route path="/" exact component={Home}/> 
            <Route path ="/Signup" exact component={Component}/>
            <Route path ="/findVaccine" exact component={FindVaccine}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
