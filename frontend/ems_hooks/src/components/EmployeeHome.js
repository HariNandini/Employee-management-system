import React, { useEffect, useState } from 'react'
import {Table, Button} from 'react-bootstrap';
import EmployeeService from '../services/EmployeeService';
import { Link, Navigate } from 'react-router-dom';

export default function EmployeeHome(){
    
    const [employees, setEmployees] = useState([])

    const getAllEmployees=()=>{
        EmployeeService.getEmployees().then((response) => {
            setEmployees(response.data)
        })
    }

    useEffect(() => {
        getAllEmployees();
    }, [])

   const  deleteEmployee=(id)=>{
        EmployeeService.deleteEmployee(id).then((response) => {
            getAllEmployees();
        })
    }
    

  return (
    <div className='root'>
            <div className='body'>
                <center><h2>Employees List</h2></center>
                <div className='AddEmployee' style={{margin:"30px"}}>
                    <Link to ='/addEmployee' >
                        <Button className="btn btn-primary"> Add Employee</Button>
                    </Link>
                </div>
                <div className='table' style={{width:'75%',margin:"0px auto"}}>
                    <Table striped bordered>
                    <thead>
                        <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email ID</th>
                        <th>Employee Phone No</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>{employee.phoneNo}</td>
                                <td>
                                    <Link to={`/updateEmployee/${employee.id}`}  >
                                        <Button className="btn btn-info">Update </Button>
                                    </Link>
                                    <Button style={{marginLeft: "10px"}} className="btn btn-danger" onClick={()=>deleteEmployee(employee.id)}>Delete </Button>
                                    <Link to={`/viewEmployee/${employee.id}`}>
                                        <Button style={{marginLeft: "10px"}}  className="btn btn-info">View </Button>
                                    </Link>
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


