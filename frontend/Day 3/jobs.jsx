import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Navbar';
import '../../assets/css/jobdetail.css'
import { Link } from 'react-router-dom';


const JobDetails = () => {
  const { id } = useParams();


  const job = {
    id: parseInt(id),
  title: "Software Engineer",
  company: "Google.",
  description: "As a Software Engineer at Tech Inc., you will be responsible for designing, developing, and maintaining high-quality software solutions. You will work closely with cross-functional teams to understand project requirements and deliver scalable and reliable software products. This role offers an exciting opportunity to contribute to cutting-edge projects and drive innovation.",
  requirements: "1. Bachelor's degree in Computer Science or related field.\n2. Proficiency in programming languages such as Java, Python, or JavaScript.\n3. Experience with software development methodologies such as Agile or Scrum.\n4. Strong problem-solving skills and attention to detail.\n5. Excellent communication and teamwork abilities.",
  salary: "Salary range: INR 10,00,000 - INR 20,00,000 per annum",
  location: "Bangalore, India",
  experience: "3+ years",
  image: "https://tse2.mm.bing.net/th?id=OIP.grExeHx17UtJbAgVAFkOKAHaFe&pid=Api&P=0&h=180"
  };

  
  if (!job) {
    return <div>Job not found!</div>;
  }

  return (
    <div>
        <div>
            <Nav/>
        </div>
      <div className="job-details">
        <div className="job-details-left">
          <img src={job.image} alt={job.title} className="job-image" />
          <h2>{job.title}</h2>
          <p><strong>Employer:</strong> {job.company}</p>
        </div>
        <div className="job-details-right">
          <p><strong>Description:</strong> {job.description}</p>
          <p><strong>Requirements:</strong> {job.requirements}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Experience:</strong> {job.experience}</p>
        </div>
      </div>
      <div className="apply-button-container">
        <button className="apply-button"><Link to="/form">Apply Now</Link></button>
      </div>
      <br>
      </br>
      <div>
         <Footer/>
      </div>
    </div>
  );
}

export default JobDetails;