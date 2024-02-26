import React, { useEffect, useState } from 'react'
import {Table, Button} from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import employeeServiceHooks from '../hooks/employeeServiceHooks';

export default function EmployeeHome(){
    
    const [employees, setEmployees] = useState([])
    const {getEmployees,deleteEmployee} = employeeServiceHooks()

    useEffect(() => {
        function fetchAllEmployees(){
            getEmployees()
            .then((res)=>{
                setEmployees(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        fetchAllEmployees()
    }, [deleteEmployee])
    
    const deleteEmployeeById = (employeeId)=>{
            deleteEmployee(employeeId)
            .then((res)=>{
                console.log("deleted successfully")
            })
            .catch((err)=>{
                console.log(err)
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
                                    <Button style={{marginLeft: "10px"}} className="btn btn-danger" onClick={()=>deleteEmployeeById(employee.id)}>Delete </Button>
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


