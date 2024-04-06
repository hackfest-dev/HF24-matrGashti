import { TextField, Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import axios from "axios";
import App from "../App";
export default function Signup() {
  let [tokens,setTokens]=useState("");
  
  const [login, setLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [curLocation, setCurLocation] = useState({});

  function changeState() {
    setLogin((prevState) => !prevState);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function getlocation() {
    const location = await axios.get("https://ipapi.co/json");
    setCurLocation(location.data);
  }

  useEffect(() => {
    getlocation();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    let data = {
      name: formData.name,
      password: formData.password,
      email: formData.email,
      latitude: curLocation.latitude,
      longitude: curLocation.longitude,
    };
    let loginData = {
      username: formData.name,
      password: formData.password,
    };
    console.log(data);
    if (!login) {
      const response = await axios.post(
        "http://localhost:3001/profile/new",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setTokens(response);
      console.log(`response id ${response}`);
    } else if (login) {
      const response = await axios.post(
        "http://localhost:3001/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setTokens(response);
      console.log(`response id ${response}`);
    }
  }

  return (
    <>
      {!tokens ? <Navbar /> : ""}

      {tokens ? <App /> : ""}
      <div
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            marginTop: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit} // Attach onSubmit event handler
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "antiquewhite",
              padding: "50px",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h5" mb={3}>
              {login ? "Login" : "Create Account"}
            </Typography>
            {!login && (
              <>
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  name="name" // Add name attribute
                  value={formData.name} // Set value from state
                  onChange={handleInputChange} // Handle change
                />
              </>
            )}
            <TextField
              required
              id="outlined-required"
              label="Email id"
              name="email" // Add name attribute
              value={formData.email} // Set value from state
              onChange={handleInputChange} // Handle change
            />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password" // Add name attribute
              value={formData.password} // Set value from state
              onChange={handleInputChange} // Handle change
            />
            <Typography variant="p" mt={3}>
              {!login ? "Already Registered? " : "New? "}
              <Button
                onClick={changeState}
                color="primary"
                sx={{ textTransform: "none" }}
              >
                {!login ? "Login Here" : "Register Here"}
              </Button>
            </Typography>
            <Button
              type="submit" // Set type as submit
              variant="contained"
              color="success"
              sx={{ marginTop: "12px" }}
            >
              {!login ? "Register" : "Login"}
            </Button>
          </div>
        </Box>
      </div>
      <br></br>
      <br></br>
      {!tokens ? <Footer /> : ""}
    </>
  );
}
