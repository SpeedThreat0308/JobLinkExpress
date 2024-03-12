package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class AddPreimumJobs {

     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int JobId;
    private String JobTitle;
    private String JobDescription;
    private String Email;
    private String UserName;
    private String Industry;
    private String JobType;
    private String CarrerLevel;
    private String Experience;
    private String City;
    private String Qualification;
    private String Specialisms;
    private int Salary;
    private String DeadLine;
    @Override
    public String toString() {
        return "AddPreimumJobs [JobId=" + JobId + ", JobTitle=" + JobTitle + ", JobDescription=" + JobDescription
                + ", Email=" + Email + ", UserName=" + UserName + ", Industry=" + Industry + ", JobType=" + JobType
                + ", CarrerLevel=" + CarrerLevel + ", Experience=" + Experience + ", City=" + City + ", Qualification="
                + Qualification + ", Specialisms=" + Specialisms + ", Salary=" + Salary + ", DeadLine=" + DeadLine
                + "]";
    }
    public int getJobId() {
        return JobId;
    }
    public void setJobId(int jobId) {
        JobId = jobId;
    }
    public String getJobTitle() {
        return JobTitle;
    }
    public void setJobTitle(String jobTitle) {
        JobTitle = jobTitle;
    }
    public String getJobDescription() {
        return JobDescription;
    }
    public void setJobDescription(String jobDescription) {
        JobDescription = jobDescription;
    }
    public String getEmail() {
        return Email;
    }
    public void setEmail(String email) {
        Email = email;
    }
    public String getUserName() {
        return UserName;
    }
    public void setUserName(String userName) {
        UserName = userName;
    }
    public String getIndustry() {
        return Industry;
    }
    public void setIndustry(String industry) {
        Industry = industry;
    }
    public String getJobType() {
        return JobType;
    }
    public void setJobType(String jobType) {
        JobType = jobType;
    }
    public String getCarrerLevel() {
        return CarrerLevel;
    }
    public void setCarrerLevel(String carrerLevel) {
        CarrerLevel = carrerLevel;
    }
    public String getExperience() {
        return Experience;
    }
    public void setExperience(String experience) {
        Experience = experience;
    }
    public String getCity() {
        return City;
    }
    public void setCity(String city) {
        City = city;
    }
    public String getQualification() {
        return Qualification;
    }
    public void setQualification(String qualification) {
        Qualification = qualification;
    }
    public String getSpecialisms() {
        return Specialisms;
    }
    public void setSpecialisms(String specialisms) {
        Specialisms = specialisms;
    }
    public int getSalary() {
        return Salary;
    }
    public void setSalary(int salary) {
        Salary = salary;
    }
    public String getDeadLine() {
        return DeadLine;
    }
    public void setDeadLine(String deadLine) {
        DeadLine = deadLine;
    }

}
