import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css"

const Home = () => {
  return (
    <div>
      <Typography sx={{ color:"blue",lineHeight: '1.5', margin:"5%" }} variant="h3" align="center">
        With our CMS make your online Projects or Web Applications NOW! Post, Manage and Delete Projects with our Service with EASE ":)"
      </Typography>
      <div>
        <ul className="ul">
          <li>
          <Button sx={{color:"green", margin:"2% 3%"}} variant="outlined">
            <Link to="/CMS/dashboard">
              Create a New Project
            </Link>
            </Button>
          </li>
          <li>
          <Button sx={{color:"red",margin:"2% 3%"}} variant="outlined">
            <Link to="/CMS/feed">
              Search and get from your Project Repository
            </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
