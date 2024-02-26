package com.ReactSpring.EMSAssignment.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ReactSpring.EMSAssignment.exception.ResourceNotFoundException;
import com.ReactSpring.EMSAssignment.exception.ValidationException;
import com.ReactSpring.EMSAssignment.model.Employee;
import com.ReactSpring.EMSAssignment.serviceImplt.EmployeeServiceImplt;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeServiceImplt employeeService;
	
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees()
	{
		return employeeService.getAllEmployees();
	}
	
	//create employee
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee emp) 
			throws ValidationException
	{
		return employeeService.createEmployee(emp);
	}
	
	//update employee
	@PutMapping("/employees/{id}")
	public void updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails)
			throws ResourceNotFoundException, ValidationException
	{
		employeeService.updateEmployee(id, employeeDetails);
	}

	
	//view employee
	@GetMapping("/employees/{id}")
	public Optional<Employee> viewEmployee(@PathVariable Long id)
			throws ResourceNotFoundException
	{
		return employeeService.viewEmployee(id);
	}
//	
//	// delete employee rest api
////		@DeleteMapping("/employees/{id}")
////		public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
////			//Optional<Employee> employee = employeeRepo.findById(id);
////			employeeRepo.deleteById(id);
////			Map<String, Boolean> response = new HashMap<>();
////			response.put("deleted", Boolean.TRUE);
////			return ResponseEntity.ok(response);
////		}
//	
	
	@DeleteMapping("/employees/{id}")
	public boolean deleteEmployee(@PathVariable Long id)
	throws ResourceNotFoundException
	{
		return employeeService.deleteEmployee(id);
	}


}
