import React, { Component } from 'react'
import {Button} from 'react-bootstrap';
import employeeService from '../services/EmployeeService';


export class AddEmployee extends Component {
constructor(props) {
  super(props)

  this.state = {
    // id: this.props.match.params.id,
    firstName: '',
    lastName: '',
    emailId: '',
  }
  this.handleFirstName=this.handleFirstName.bind(this);
  this.handleLastName=this.handleLastName.bind(this);
  this.handleEmailId=this.handleEmailId.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleCancel=this.handleCancel.bind(this);

}

handleFirstName = (event) => {
  this.setState({firstName: event.target.value});
}

handleLastName = (event) => {
  this.setState({lastName: event.target.value});
}

handleEmailId = (event) => {
  this.setState({emailId: event.target.value});
}

handleSubmit= (e) =>{
  // e.preventDefault();
    let firstName=this.state.firstName,
       lastName=this.state.lastName,
        emailId=this.state.emailId;
  let employee = {firstName, lastName, emailId};
  console.log({employee});

  //--------exception

  employeeService.createEmployee(employee).then(res => {
     this.props.history.push('/employees');
    
  });
}

handleCancel(){
    this.props.history.push('/employees');
}

  render() {
    return (
      <div>
        <div className='container' style={{margin:"30px"}}>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Add Employee</h3>
              <div className='card-body'>                
              <form>
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstName} aria-required required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastName} aria-required required/>
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email"  className="form-control" placeholder="Enter email" value={this.state.emailId} onChange={this.handleEmailId} aria-required required/>
                  </div>
                  
                    <Button type='submit' className="btn btn-success" onClick={(e)=>this.handleSubmit(e)} style={{marginTop: '20px'}}>Submit</Button>
                    <Button style={{marginLeft: '20px', marginTop: '20px'}} onClick={this.handleCancel}>Cancel</Button>
                   
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddEmployee
