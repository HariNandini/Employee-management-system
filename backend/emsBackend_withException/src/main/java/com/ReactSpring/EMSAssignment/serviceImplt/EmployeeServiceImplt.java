package com.ReactSpring.EMSAssignment.serviceImplt;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.ReactSpring.EMSAssignment.exception.ResourceNotFoundException;
import com.ReactSpring.EMSAssignment.exception.ValidationException;
import com.ReactSpring.EMSAssignment.model.Employee;
import com.ReactSpring.EMSAssignment.repository.EmployeeRepo;


@Service
public class EmployeeServiceImplt{

	@Autowired
	private EmployeeRepo employeeRepo;
	
	//get all employees
	public List<Employee> getAllEmployees()
	{
		return employeeRepo.findAll();
	}
	
	//create employee
	public Employee createEmployee(@RequestBody Employee emp) 
			throws ValidationException
	{
		if(emp.getFirstName().isEmpty())
			throw new ValidationException("First Name cannot be empty");
		if(emp.getLastName().isEmpty())
			throw new ValidationException("Last Name cannot be empty");
		
		if(emp.getEmailId().isEmpty()) 
			throw new ValidationException("EmailId should not be null");
		if(!(emp.getEmailId().toString().contains("@gmail.com")))
			throw new ValidationException("EmailId should contain @gmail.com");
		
		if(emp.getPhoneNo().isEmpty())
			throw new ValidationException("Phone Number cannot be empty");
//		if(emp.getPhoneNo().length()==10)
//			throw new ValidationException("Phone Number should be 10 digits");
//		
		return employeeRepo.save(emp);
	}

	
	//update employee
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails)
			throws ResourceNotFoundException, ValidationException
	{
		
		if(employeeRepo.findById(id).isEmpty())
			throw new ResourceNotFoundException("Employee with id = "+ id+" not found");
		
		if(employeeDetails.getFirstName().isEmpty())
			throw new ValidationException("First Name cannot be empty");
		
		if(employeeDetails.getLastName().isEmpty())
			throw new ValidationException("Last Name cannot be empty");
		
		if(employeeDetails.getEmailId().isEmpty()) 
			throw new ValidationException("EmailId should not be null");
		if(!(employeeDetails.getEmailId().toString().endsWith("@gmail.com")))
			throw new ValidationException("EmailId should contain @gmail.com");	
		
//		if(employeeDetails.getPhoneNo().length()==10)
//			throw new ValidationException("Phone Number should be 10 digits");
//		if(employeeDetails.getPhoneNo().)
//			throw new ValidationException("Phone Number should be 10 digits");
		
		

		Employee emp = employeeRepo.findById(id).get();
		emp.setFirstName(employeeDetails.getFirstName());
		emp.setLastName(employeeDetails.getLastName());
		emp.setEmailId(employeeDetails.getEmailId());			
		emp.setPhoneNo(employeeDetails.getPhoneNo());		
		
		Employee updatedEmployee = employeeRepo.save(emp);
		return ResponseEntity.ok(updatedEmployee);
	}
	
	//view Employee
	public Optional<Employee> viewEmployee(@PathVariable Long id)
	throws ResourceNotFoundException
	{
		Optional<Employee> emp = employeeRepo.findById(id);
		if(emp.isEmpty())
			throw new ResourceNotFoundException("Employee with id = "+ id+" not found");
		return emp;
	}
	
	//delete employee
	public Boolean deleteEmployee(@PathVariable Long id)
	throws ResourceNotFoundException
	{
		Optional<Employee> emp= employeeRepo.findById(id);
		if(emp.isEmpty())
			throw new ResourceNotFoundException("Employee with id = "+ id+" not found");
		
		employeeRepo.deleteById(id);
		return true;
	}
	
}
