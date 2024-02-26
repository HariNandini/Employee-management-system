import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Button } from 'react-bootstrap'

export class ViewEmployee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id: this.props.match.params.id,
         employee:{}
      }
      this.handleBack=this.handleBack.bind(this);
    }
    
    handleBack(){
        this.props.history.push(`/employees`);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            this.setState({ employee: res.data});
        })
       
    }
    render() {
    return (
      <div className='container'>
        <div className='card col-md-6 offset-md-3' style={{position: 'inherit'}}>
        <h1 className='text-center'>Employee Details</h1>
        
        <div class="card-body">
            <div class="row">
                <h5>Employee First Name:</h5>
                <div>{this.state.employee.firstName}</div>
            </div>
            <div class="row">
                <h5>Employee Last Name:</h5>
                <div>{this.state.employee.lastName}</div>
            </div>
            <div class="row">
                <h5>Employee Email ID:</h5>
                <div>{this.state.employee.emailId}</div>
            </div>
            <div class="row" style={{alignItems:'auto'}}>
            <Button 
                onClick={this.handleBack}
                style={{float: 'left',
                    width: '30%'}}
                className='btn btn-info center'>
                Back
            </Button>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default ViewEmployee
