package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.model.UserModel;
import com.example.demo.services.impl.UserService;

@CrossOrigin(origins = "http://localhost:5432")
@RestController
public class Ucontroller
{
	@Autowired
	private UserService Userv;
	
	@GetMapping("/showuser")
	public List<UserModel> showUsers(){
		return Userv.getAllUser();
	}  
	
	@PostMapping("/adduser") 
	public String addUsers(@RequestBody UserModel obj) {
		return Userv.addUser(obj);
	}	
	
	@GetMapping("/showuser/{email}")
	public Optional<UserModel> findById(@PathVariable String email) {
		return Userv.getUser(email);
	}
	// @PutMapping("/updateuser/{id}")
	// public String update(@PathVariable Integer id,@RequestBody UserModel u){
	// 	return Userv.updateUserModel(id,u);
	// }
	
	// @DeleteMapping("/deleteuser/{id}")
	// public String removeUsers(@PathVariable Long id) {
	// 	Userv.deleteById(id);
	// 	return "Successfully Deleted!!";
	// }
}