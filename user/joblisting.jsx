import '../../assets/css/joblistings.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Navbar';

const JobListings = () => {
  const jobOpenings = [
    {
      "id": 1,
      "title": "Software Engineer",
      "company": "Tech Inc.",
      "image": "https://static.vecteezy.com/system/resources/previews/020/962/986/original/software-engineer-graphic-clipart-design-free-png.png"
    },
    {
      "id": 2,
      "title": "Data Scientist",
      "company": "Tech Inc.",
      "image": "https://tse1.mm.bing.net/th?id=OIP.kvJNJ1PqOOmOHXWHFNFqLwHaE8&pid=Api&P=0&h=180" // Add image URL
    },
    {
      "id": 3,
      "title": "Sql Engineer",
      "company": "Data Insights Co.",
      "image": "https://i.imgur.com/dINW3BG.png" // Add image URL
    },
    {
      "id": 4,
      "title": "UX/UI Designer",
      "company": "Design Studio XYZ",
      "image": "https://indosystem.com/wp-content/uploads/2016/03/uiux.png" // Add image URL
    },  
    {
      "id": 5,
      "title": "Frontend Developer",
      "company": "WebTech Solutions",
      "image": "https://static.wixstatic.com/media/94a268_dbd151e26aa6426ea93150ae762c2856~mv2.png/v1/fit/w_2500,h_1330,al_c/94a268_dbd151e26aa6426ea93150ae762c2856~mv2.png"
    },
    {
      "id": 6,
      "title": "Backend Developer",
      "company": "CloudTech Innovations",
      "image": "https://tse2.mm.bing.net/th?id=OIP.MWRXnEkXpiG0NBousGp75QAAAA&pid=Api&P=0&h=180"
    },  
    {
      "id": 7,
      "title": "Cloud Architect",
      "company": "AWS",
      "image": "https://tse2.mm.bing.net/th?id=OIP.LJw8aitT6YkTxXt56C5ahAHaEw&pid=Api&P=0&h=180"
    },  
    {
      "id": 8,
      "title": "Cybersecurity Analyst",
      "company": "Cisco",
      "image": "https://www.springboard.com/library/static/02c74020feb0920a08e6987f94ed0498/12609/cyber-security-job-roles.jpg"
    },  
  ];

  return (
    <div className='bgj'>
      <div>
        <Nav/>
      </div>
      <br/>
      <div>
        <h1><center>JOB OPENINGS</center></h1>
      </div>
      <br></br>
    <div className="job-listings">
      {jobOpenings.map(job => (
        <div key={job.id} className="job-card">
          <img src={job.image} alt={job.title} className="job-image" />
          <div className="job-card-content">
            <h2>{job.title}</h2>
            <p><strong>Employer:</strong> {job.company}</p>
            <button className="apply-button"><Link to={`/job/${job.id}`}>Know More</Link></button>
          </div>
        </div>
      ))}
    </div>
    <br>
    </br>
    <div>
       <Footer/>
    </div>
    </div>
  );
}

export default JobListings;