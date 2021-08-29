package net.technopc.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.technopc.springboot.model.Employee;
import net.technopc.springboot.repository.EmployeeRepository;
@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class EmplyeeController {
@Autowired
private EmployeeRepository employeeRepository;

@GetMapping("/employees")
public List<Employee> getEmployee(){
	return employeeRepository.findAll();
	
}
}
