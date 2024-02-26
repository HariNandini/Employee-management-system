import React, { Component } from 'react'
import {Table, Button} from 'react-bootstrap';
import EmployeeService from '../services/EmployeeService';

class EmployeeHome extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.handleAddEmployee = this.handleAddEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(employeeId){
        EmployeeService.deleteEmployee(employeeId).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== employeeId)});
        });
    }
    viewEmployee(employeeId){
        this.props.history.push(`/view-employee/${employeeId}`);
    }
    editEmployee(employeeId){
        this.props.history.push(`/add-employee/${employeeId}`);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    handleAddEmployee(){
        this.props.history.push(`/add-employee`);
    }

  render() {
    return (
        <div className='root'>
            <div className='body'>
                <center><h2>Employees List</h2></center>
                <div className='AddEmployee' style={{margin:"30px"}}>
                    <Button className="btn btn-primary" onClick={this.handleAddEmployee}> Add Employee</Button>
                </div>
                <div className='table' style={{width:'75%',margin:"0px auto"}}>
                    <Table striped bordered>
                    <thead>
                        <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email ID</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.employees.map(
                            employee =>
                            <tr key = {employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <Button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </Button>
                                    <Button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </Button>
                                    <Button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </Button>
                                </td>
                            </tr>
                                    )
                                }
                            </tbody>
                    </Table>
                </div>
                </div>
            </div>
        )
    }
}



export default EmployeeHome;
