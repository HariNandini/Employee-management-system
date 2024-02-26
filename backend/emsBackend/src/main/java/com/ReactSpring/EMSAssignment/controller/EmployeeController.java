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

import com.ReactSpring.EMSAssignment.model.Employee;
import com.ReactSpring.EMSAssignment.repository.EmployeeRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepo employeeRepo;
	
	@GetMapping("/employees")
	public List<Employee> getEmployee()
	{
		return employeeRepo.findAll();
	}
	
	//create employee
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee emp)
	{
		return employeeRepo.save(emp);
	}
	
	//update employee
//	@PutMapping("/employees/{id}")
//	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails)
//	{
//		Employee employee = employeeRepo.findById(id).get();
//		
//		employee.setFirstName(employeeDetails.getFirstName());
//		employee.setLastName(employeeDetails.getLastName());
//		employee.setEmailId(employeeDetails.getEmailId());		
//		
//		Employee updatedEmployee = employeeRepo.save(employee);
//		return ResponseEntity.ok(updatedEmployee);
//	}
	
	
	@PutMapping("/employees/{id}")
	public void updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails)
	{
		Employee employee = employeeRepo.findById(id).get();
		
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmailId(employeeDetails.getEmailId());		
		
		employeeRepo.save(employee);
	}
	
	//view employee
	@GetMapping("/employees/{id}")
	public Optional<Employee> viewEmployee(@PathVariable Long id)
	{
		Optional<Employee> emp = employeeRepo.findById(id);
		
		return emp;
		
	}
	
	// delete employee rest api
//		@DeleteMapping("/employees/{id}")
//		public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
//			//Optional<Employee> employee = employeeRepo.findById(id);
//			employeeRepo.deleteById(id);
//			Map<String, Boolean> response = new HashMap<>();
//			response.put("deleted", Boolean.TRUE);
//			return ResponseEntity.ok(response);
//		}
	
	
	@DeleteMapping("/employees/{id}")
	public Boolean deleteEmployee(@PathVariable Long id){
		employeeRepo.deleteById(id);
		return true;
	}


}
