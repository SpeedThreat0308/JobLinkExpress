import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../../assets/css/home.css'
const HomePage = () => {
  const navigate=useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenBut=(event)=>{
    setAnchorElNav(event.target);
      navigate('/jobs');
  }
  return (
    <div className="bg">
      <header>
        <h1><center>Welcome To JobXpress</center></h1>
      </header>
      <main>
        <br/><br/><br/><br/>
        <h2 style={{color: "darkblue",fontWeight: "bold"}}><center>Create Big Ideas Worth Rallying Around!!</center></h2>
        <br/>
        <h3 style={{color: "black",fontWeight: "bold"}}><center>Find Jobs that match your profile!</center></h3>
        <br/><br/>
        <div>
        <center>
        <Button
                type="submit"
                variant="contained"
                anchorEl={anchorElNav}
                onClick={handleOpenBut}
                open={Boolean(anchorElNav)}
                sx={{ mt: 3, mb: 2 ,backgroundColor: "black"}}
              >
                Want a Job? Browse Me!
        </Button>
        </center>
        </div>
        <br/><br/>
      </main>
    </div>
  );
}

export default HomePage;