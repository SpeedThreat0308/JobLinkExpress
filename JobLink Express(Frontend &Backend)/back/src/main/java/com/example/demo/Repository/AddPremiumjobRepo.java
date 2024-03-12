package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.AddPreimumJobs;

@Repository
public interface AddPremiumjobRepo extends JpaRepository<AddPreimumJobs,Integer>  {

}
