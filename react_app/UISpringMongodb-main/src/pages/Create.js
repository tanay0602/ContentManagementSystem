import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const initial = {
  PROJ_ID: "",
  PROJ_NAME: "",
  PERMISSIONS: [],
  URL: "",
  PAGE_TITLES: [],
  DESIGN_THEMES: [],
  COLORS: [],
  FONTS: [],
  PAGE_COUNT: 0,
  DATE_CREATED: "",
};

const Create = () => {
    const COLORS = [
        {
          name: "Red"
        },
        {
          name: "Blue"
        },
        {
          name: "Green"
        },
        {
          name: "Yellow"
        },
        {
          name: "Purple"
        }
      ];
    const FONTS = [
        {
          name: "Arial"
        },
        {
          name: "Times New Roman"
        },
        {
          name: "Helvetica"
        },
        {
          name: "Verdana"
        },
        {
          name: "Calibri"
        }
      ];
    const DESIGN_THEMES = [
        {
          name: "Modern"
        },
        {
          name: "Minimalist"
        },
        {
          name: "Vintage"
        },
        {
          name: "Corporate"
        },
        {
          name: "Creative"
        }
      ];
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/addProject", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      navigate("/CMS/feed");
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value.split(","),
    }));
  };

  return (
    <Paper sx={{ padding:"5%"}} elevation={3}>
      <Typography sx={{ margin: "2% auto" }} align="center" variant="h5">
        Create New Project
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={handleChange}
            label="PROJ_ID"
            variant="outlined"
            value={form.PROJ_ID}
          />
          <TextField
            min="0"
            type="number"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange= {handleChange}
            label="PROJ_NAME"
            variant="outlined"
            value={form.PROJ_NAME}
          />
           <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            multiline
            rows={4}
            onChange= {handleChange}
            label="URL"
            variant="outlined"
            value={form.URL}
          />
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            multiline
            rows={4}
            onChange= {handleChange}
            label="Specify the Page Count (Modifiable Later)"
            variant="outlined"
            value={form.PAGE_COUNT}
          />
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            multiline
            rows={4}
            onChange={handleChange}
            label="Specify the Date of Creation"
            variant="outlined"
            value={form.DATE_CREATED}
          />
          <TextField
            type="text"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={handleArrayChange}
            name="PERMISSIONS"
            label="PERMISSIONS (comma-separated)"
            variant="outlined"
            value={form.PERMISSIONS.join(",")}
          />
           <TextField
            type="text"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={handleArrayChange}
            name="PAGE_TITLES"
            label="PAGE_TITLES (comma-separated)"
            variant="outlined"
            value={form.PAGE_TITLES.join(",")}
          />

          <Box sx={{ margin:"2% auto"}}>
          <h3>Select Colors of choice:</h3>
         <ul>
        {COLORS.map(({ name }, index) => {
          return (
            <li key={index}>
              <div >
                <div>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    onChange={handleChange}  
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
         
       
      </ul>
          </Box>

          <Box sx={{ margin:"2% auto"}}>
          <h3> Select Preffered Fonts: </h3>
         <ul>
        {FONTS.map(({ name }, index) => {
          return (
            <li key={index}>
              <div >
                <div>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    onChange={handleChange}  
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
         
      </ul>
          </Box>
                 

          <Box sx={{ margin:"2% auto"}}>
          <h3> Select Preferred Design Themes: </h3>
         <ul>
        {DESIGN_THEMES.map(({ name }, index) => {
          return (
            <li key={index}>
              <div >
                <div>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    onChange={handleChange}  
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
         
      </ul>
          </Box>


          <Button
            sx={{  width: "50%", margin: "2% auto" }}
            variant="contained"
            type="CREATE"
          >
            CREATE
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;
