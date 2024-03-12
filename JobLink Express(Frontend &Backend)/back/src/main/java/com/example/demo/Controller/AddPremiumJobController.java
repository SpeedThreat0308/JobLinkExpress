package com.example.demo.Controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.AddPreimumJobs;
import com.example.demo.Service.AddPremiumJobsService;

@CrossOrigin("*")
@RestController
public class AddPremiumJobController {
     @Autowired
    AddPremiumJobsService service;

    @PostMapping("/admin/premium/postJob")
	public AddPreimumJobs add(@RequestBody AddPreimumJobs Jobpost ) {
		System.out.println(Jobpost);
		return service.addPremiumJob(Jobpost);
	}
	
	@GetMapping("/admin/premium/getJob")
	public java.util.List<AddPreimumJobs> read(){
		return service.getPremiumJob();
	}
	@DeleteMapping("/admin/premium/deletejob/{id}")
	public String delete(@PathVariable int id) {
		return service.DeleteJobById(id);
	}
		
	@PutMapping("/admin/premium/update/{id}")
public String putMethodName(@RequestBody AddPreimumJobs entity, @PathVariable int id) {
    return service.updateJob(entity, id);
}

	@GetMapping("/admin/premium/getJob/{id}")
public ResponseEntity<AddPreimumJobs> getJobById(@PathVariable int id) {
    Optional<AddPreimumJobs> job = service.getJobById(id);
    if (job.isPresent()) {
        return ResponseEntity.ok().body(job.get());
    } else {
        return ResponseEntity.notFound().build();
    }
}
}
