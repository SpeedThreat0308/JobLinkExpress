package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Model.AddUserResume;
import com.example.demo.Model.AdminJob;
import com.example.demo.Repository.AddUserResumeRepo;

@Service
public class AddUserResumeService {

    @Autowired
    AddUserResumeRepo repository;

    public AddUserResume addResume(AddUserResume postResume) {
	return repository.save(postResume);
		
	}
    public List<AddUserResume> getReusme(){
		return repository.findAll();
	}
    public String DeleteResumeById(int id) {
		repository.deleteById(id);;
		return "deleted";
	}
   public String updateResume(AddUserResume AddUserResume){
		Optional<AddUserResume> admin = repository.findById(AddUserResume.getUserId());
		if(admin.isEmpty()){
			return "No user Exist";
		}
		admin.get().setFirstName(AddUserResume.getFirstName());
		admin.get().setMiddleName(AddUserResume.getMiddleName());
		admin.get().setLastName(AddUserResume.getLastName());
		admin.get().setAge(AddUserResume.getAge());
		admin.get().setPreferingjob(AddUserResume.getPreferingjob());
		admin.get().setLanguage(AddUserResume.getLanguage());
		admin.get().setAboutinfo(AddUserResume.getAboutinfo());
		admin.get().setFacebook(AddUserResume.getFacebook());
		admin.get().setLinkedin(AddUserResume.getLinkedin());
		admin.get().setTwitter(AddUserResume.getTwitter());
		admin.get().setGoogleplus(AddUserResume.getGoogleplus());
		admin.get().setCountry(AddUserResume.getCountry());
		admin.get().setState(AddUserResume.getState());
		admin.get().setFulladdress(AddUserResume.getFulladdress());
		admin.get().setLatitude(AddUserResume.getLatitude());
		admin.get().setLongitude(AddUserResume.getLongitude());
		admin.get().setLatitude(AddUserResume.getLatitude());
		return "Updated Successfully";
   }

}
