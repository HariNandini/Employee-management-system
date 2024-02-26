import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EmployeeHome from './components/EmployeeHome'
import Header from './components/Header'
import Footer from './components/Footer'
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';
import { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <div className='container'>
            <Switch>
                <Route path='/' exact component={EmployeeHome}></Route>
                <Route path='/employees' component={EmployeeHome}></Route>  
                <Route path='/add-employee' component={AddEmployee}></Route>  
                <Route path='/add-employee/:id' component={UpdateEmployee}></Route>
                <Route path='/view-employee/:id' component={ViewEmployee}></Route>
             </Switch>
          </div>
          <Footer/>
        </Router>
      </div>
    )
  }
}

export default App
