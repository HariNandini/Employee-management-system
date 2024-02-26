import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import employeeService from '../services/EmployeeService';



export class UpdateEmployee extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: this.props.match.params.id,
      firstName: '',
      lastName: '',
      emailId: '',
      gotData:false
    }
    this.handleFirstName=this.handleFirstName.bind(this);
    this.handleLastName=this.handleLastName.bind(this);
    this.handleEmailId=this.handleEmailId.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
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

  componentDidMount(){
    employeeService.getEmployeeById(this.state.id).then( (res) => {
      let employee =res.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId
      });
    });
  }
  
  handleSubmit= (e) =>{
    e.preventDefault();
      let firstName=this.state.firstName,
          lastName=this.state.lastName,
          emailId=this.state.emailId;
    let employee = {firstName, lastName, emailId};
    console.log({employee});

    employeeService.updateEmployee(employee,this.state.id).then(() => {
      this.props.history.push('/employees');
     
   });
  }
  
    render() {
      return (
        <div>
          <div className='container' style={{margin:"30px"}}>
            <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className='text-center'>Update Employee</h3>
                {
                  this.state.gotData && <Link to={"/employees"}/>
                }
                <div className='card-body'>
                  <form>
                    <div class="form-group">
                      <label>First Name</label>
                      <input type="text" class="form-control" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstName} required/>
                    </div>
                    <div class="form-group">
                      <label>Last Name</label>
                      <input type="text" class="form-control" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastName} required/>
                    </div>
                    <div class="form-group">
                      <label>Email address</label>
                      <input type="email"  class="form-control" placeholder="Enter email" value={this.state.emailId} onChange={this.handleEmailId} required/>
                    </div>
                    
                      <button class="btn btn-success" onClick={(e)=>this.handleSubmit(e)} style={{marginTop: '20px'}}>Submit</button>
                      {/* <button class="btn btn-primary" onClick={this.handleCancel} style={{marginLeft: '20px', marginTop: '20px'}}>Cancel</button>
                       */}
                      <Link to = "/employees">  
                          <Button style={{marginLeft: '20px', marginTop: '20px'}}>Cancel</Button>
                      </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default UpdateEmployee;
