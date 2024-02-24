import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import Nav from "./Navbar";
import Footer from "./Footer";


function SurveyComponent() {
    const json = {
        "title": "Job Application Form",
        "description": "Thank you for your interest in working with us. Please fill out the form and send your application. We will get back to you within a week.",
        "elements": [{
          "type": "panel",
          "name": "personal-info",
          "title": "Personal Information",
          "elements": [{
            "type": "text",
            "name": "first-name",
            "title": "First name",
            "isRequired": true
          }, {
            "type": "text",
            "name": "last-name",
            "startWithNewLine": false,
            "title": "Last name",
            "isRequired": true
          }, {
            "type": "text",
            "name": "birthdate",
            "title": "Date of birth",
            "inputType": "date",
            "isRequired": true
          }]
        }, {
          "type": "panel",
          "name": "location",
          "title": "Your Location",
          "elements": [
            {
            "type": "text",
            "name": "city",
            "title": "City/Town"
          },
            ]
        }, {
          "type": "text",
          "name": "email",
          "title": "Email",
          "inputType": "email",
          "placeholder": "mail@example.com"
        }, 
        {
          "type": "dropdown",
          "name": "position",
          "title": "What position are you applying for?",
          "choices": [{
            "value": "frontend",
            "text": "Frontend Developer"
          }, {
            "value": "backend",
            "text": "Backend Developer"
          }, {
            "value": "fullstack",
            "text": "Full-Stack Developer"
          }, {
            "value": "intern",
            "text": "Intern"
          }]
        }, 
         {
          "type": "file",
          "name": "resume",
          "title": "Upload your resume",
          "acceptedTypes": "application/pdf"
        }],
        "showQuestionNumbers": false,
        "completeText": "Send",
        "widthMode": "static",
        "width": "800px"
      };
    const survey = new Model(json);
    survey.onComplete.add((sender) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return (
        <div>
            <div>
               <Nav/>
            </div>
        <Survey model={survey} />
        <div>
           <Footer/>
        </div>
        </div>
    
    );
}

export default SurveyComponent;