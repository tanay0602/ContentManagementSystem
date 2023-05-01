import {Box,Card,Grid,TextField, Typography, InputAdornment, Button} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  //const [query, setQuery] = useState(" ");
  localStorage.setItem("getQuery","");
  const query = localStorage.getItem("getQuery");
  const [post, setPost] = useState([]);

  
  useEffect(() => {
    const fetchPosts = async () => {

      try{
      const response = await axios.get(`http://localhost:8080/projects/${localStorage.getItem("getQuery")}`).then(response=>console.log(response));
      
      setPost(response.data);
      }
      catch(error){
        console.log(error)
      }
    };  

    const fetchInitialPosts = async () => {

        try{
        const response = await axios.get(`http://localhost:8080/allProjects`);
        
        setPost(response.data);
        }
        catch(error){
          console.log(error)
        }
    };

    if (localStorage.getItem("getQuery").length === 0) {fetchInitialPosts();}
    else if (localStorage.getItem("getQuery").length > 0) {fetchPosts();}
  }, [query]);
  console.log(post);

  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      <Grid item xs={12} md={12} lg={12}>
      <Button sx={{ margin: "1% 2%" }} variant="outlined">
            <Link to="/">Home</Link>
          </Button>
        <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search Your Project..."
            sx={{ width: "75%", padding: "2% auto" }}
            fullWidth
            onChange={(e) => localStorage.setItem("getQuery",e.target.value)}
          />
        </Box>
      </Grid>
      {post && post.length>0 &&
        post.map((p) => (
            <Grid key={p.PAGE_COUNT} item xs={12} md={6} lg={4}>
              <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "2rem", fontWeight: "600" }}
                >
               HELLO
                </Typography>
                <Typography sx={{ color: "#585858", marginTop:"2%" }} variant="body1" >
                  PROJECT NAME: {p.PROJ_NAME}
                </Typography>
                <br />
                <br />
                <Typography variant="h6">
                  PAGES: {p.PAGE_COUNT} 
                </Typography>

                <Typography gutterBottom  variant="body1">Editors : </Typography>
                {p.PERMISSIONS && p.PERMISSIONS.map((s, i) => {
                  return (
                    <Typography variant="body1" gutterBottom key={i}>
                      {s} 
                    </Typography>
                  );
                  })}
  
              </Card>
            </Grid>
          
        ))}
    </Grid>
  );
};

export default Feed;
