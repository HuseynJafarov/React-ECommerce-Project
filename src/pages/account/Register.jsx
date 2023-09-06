import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import Swal from "sweetalert2";
import '../../assets/style/account.css'
import Header from "../../components/layout/Header";

const theme = createTheme();

const Register = () => {

  const url = 'https://localhost:7055';

  const navigate = useNavigate();

  const [FullName, setFullName] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState([]);

  const newUser = {
    fullname: FullName,
    username: Username,
    email: Email,
    password: Password,
    confirmPassword: ConfirmPassword
  };

  const [basketcount, setbasketcount] = useState(0);

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  async function getbasketcount() {
    if (token) {
      try {
        const response = await axios.get(`${url}/api/Basket/Getbasketcount`, config);
        setbasketcount(response.data);
      } catch (error) {
        console.error("Error retrieving basket count:", error);
        // Handle the error, e.g., display an error message or take necessary actions
      }
    }
  }

  useEffect(() => {
    getbasketcount();
  }, []);

  const Submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const [key, value] of Object.entries(newUser)) {
      formData.append(key, value);
    }

    try {
      const res = await axios.post(`${url}/api/Account/Register`, formData, {
        headers: {
          Accept: "*/*"
        }
      });

      if (res.data.errors !== null) {
        setInvalid(true)
        setInvalidMessage(res.data.errors)
      }
      if (res.data.statusMessage === "Success") {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Please Check Your Email',
          showConfirmButton: false,
          timer: 3000
        });
        // navigate('/login');
      }
      console.log(res);
    } catch (error) {
      const errors = error.response.data;
      if (errors.length > 0) {
        setInvalid(true)
        setInvalidMessage(errors)
      }
    }
  };

  return (
    <>
      <Header basketcount={basketcount} />
      <section
        id="register-area"
        style={{
          backgroundImage: "url(/images/Register-image.jpg)",
        }}
      >
        <div className='container my-5'>
          <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
              <CssBaseline />
              <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                  backgroundImage: 'url(./images/study1-1024x666.jpeg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: '#ffb606' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Register
                  </Typography>
                  <Box component="form" noValidate onSubmit={Submit} sx={{ mt: 1 }}>

                    <FormGroup style={{ marginBottom: "20px" }}>
                      {invalid && (
                        <Alert severity="error">{invalidMessage}</Alert>
                      )}
                    </FormGroup>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="fullname"
                      label="Fullname"
                      name="fullname"
                      type="text"
                      autoComplete="off"
                      value={FullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      type="text"
                      autoComplete="off"
                      value={Username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      type="email"
                      autoComplete="off"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      autoComplete="off"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="confirmPassword"
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      autoComplete="off"
                      value={ConfirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button id="contact_send_btn" type="submit" className="contact_send_btn trans_200">Sign Up</button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>
        </div>
      </section>
    </>
  );
}

export default Register;
