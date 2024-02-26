import React, { Component, useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import EmployeeService from '../services/EmployeeService';


export const AddEmployee =() => {

  const[firstName, setFirstName]= useState('')
  const[lastName, setLastName]= useState('')
  const[emailId, setEmailId]= useState('')
  const[phoneNo, setPhoneNo]= useState('')
  // form error
  const[firstNameErr,setFirstNameErr]=useState({});
  const[lastNameErr,setLastNameErr]=useState({});
  const[emailIdErr,setEmailIdErr]=useState({});
  const[phoneNoErr,setPhoneNoErr]=useState({});

  const navigate=useNavigate();
  

  const saveEmployee=(e)=>{
    e.preventDefault();
    formValidation();
    const employee ={firstName,lastName,emailId,phoneNo}
    EmployeeService.createEmployee(employee).then((response) => {
      console.log(response.data)
      navigate("/");
    })

  }

   //  Form
   const formValidation = () =>{
    const firstNameErr = {};
    const lastNameErr = {};
    const emailIdErr = {};
    const phoneNoErr = {};
    let isValid = true;
    if(firstName.trim().length===0){
     firstNameErr.firstNameEmpty = "First Name is required";
     isValid = false; 
   }
   if(lastName.trim().length===0){
     lastNameErr.lastNameEmpty = "Last Name is required";
     isValid = false;
   }
   if(emailId.trim().length===0){
     emailIdErr.emailIdEmpty = "EmailId is required"; 
   isValid = false;
   }
   else if((emailId.endsWith("@gmail.com"))===false){
     emailIdErr.emailIdError = "@gmail.com is required";
     isValid = false;
  
   }
   if((phoneNo.toString().length!==10)){
     phoneNoErr.phoneNolength = "Mobile Number should be 10 digits";
     isValid = false;
   }

   setFirstNameErr(firstNameErr);
   setLastNameErr(lastNameErr);
   setEmailIdErr(emailIdErr);
   setPhoneNoErr(phoneNoErr);
   return isValid;
 }

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
                    <input type="text" className="form-control" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                  </div>
                  {Object.keys(firstNameErr).map((key)=>{
                    return <div style={{color : "red"}}>{firstNameErr[key]}</div>
                  })}
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                  </div>
                  {Object.keys(lastNameErr).map((key)=>{
                    return <div style={{color : "red"}}>{lastNameErr[key]}</div>
                  })}
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email"  className="form-control" placeholder="Enter email" value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
                  </div>
                  {Object.keys(emailIdErr).map((key)=>{
                    return <div style={{color : "red"}}>{emailIdErr[key]}</div>
                  })}
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="number"  className="form-control" placeholder="Enter phone no" value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)} minLength={10} maxLength={10}/>
                  </div>
                  {Object.keys(phoneNoErr).map((key)=>{
                    return <div style={{color : "red"}}>{phoneNoErr[key]}</div>
                  })}
                    <Button type='submit' className="btn btn-success" onClick={(e)=>saveEmployee(e)} style={{marginTop: '20px'}}>Submit</Button>
                    <Link to ='/' >
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

export default AddEmployee
