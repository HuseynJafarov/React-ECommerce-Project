import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { JwtContext } from '../../Context/Context';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import Alert  from '@mui/material/Alert';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';
import axios from 'axios';
import "../../assets/scss/login.scss";

const theme = createTheme();

const Login = () => {

  const navigate = useNavigate();

  const url = 'https://localhost:7055';

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState([]);



  const {ParseJwt} = useContext(JwtContext);

  const exsistUser = {
    email: Email,
    password: Password
  };

  const SignIn = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const [key, value] of Object.entries(exsistUser)) {
      formData.append(key, value);
    };

    try { 
        await axios.post(`${url}/api/Account/Login`, formData, {
          headers: {
            Accept: "*/*"
          }
        })
          .then((res) => {

            if (res.data.errors !== null) {
              setInvalid(true)
              setInvalidMessage(res.data.errors)
          }
            

            if (res.data.statusMessage === "Success") {
              let userDecode = ParseJwt(res.data.token)[
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
              ];
                if (userDecode === "SuperAdmin" || userDecode === "Admin") {
                  Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'You are not authorized to access this page',
                    showConfirmButton: false,
                    timer: 1500
                  });
                } else {
                localStorage.setItem("token", JSON.stringify(res.data.token));
                console.log(res.data)
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Signed in succesfully!',
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/');
                window.location.reload()
              }
            } else {
              Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Email or password is wrong!',
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
    } catch (error) {
      const errors = error.response.data;
      if (errors.length > 0) {
          setInvalid(true)
          setInvalidMessage(errors)
      }
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setInvalid(false)
}
const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setInvalid(false)
}

 

  return (
    <>
     
     
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
                  Login
                </Typography>
                <Box component="form" noValidate onSubmit={(e) => SignIn(e)} sx={{ mt: 1 }}>

                <FormGroup style={{ marginBottom: "20px" }}>
                            {
                                invalid && (
                                    <Alert severity="error">{invalidMessage}</Alert>
                                )
                            }
                </FormGroup>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    // autoComplete="off"
                    value={Email}
                    onChange={handleEmailChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    // autoComplete="off"
                    value={Password}
                    onChange={handlePasswordChange}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    style={{ background: '#ffb606' }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link to="/ForgotPassword" variant="body2">
                        {"Forgot password?"}
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/Register" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
     
    </>

  );
}
export default Login;