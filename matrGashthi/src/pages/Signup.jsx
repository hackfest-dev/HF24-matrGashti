import { TextField, Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import Navbar from '../components/Navigation';
import Footer from '../components/Footer';

export default function Signup() {
    const [login, setLogin] = useState(false);

    function changeState() {
        setLogin(prevState => !prevState);
    }

    return (
        <>
            <Navbar/>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    marginTop:'70px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundPosition: "center",
                }}
                noValidate
                autoComplete="off"
            >
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-evenly',
                    alignItems:'center',
                    backgroundColor:'antiquewhite',
                    padding:'50px',
                    borderRadius:'10px'
                }}>
                    <Typography variant='h5' mb={3}>
                        {login ? "Login" : "Create Account"}
                    </Typography>
                    {!login && (
                        <>
                            <TextField
                                required
                                id="outli   ned-required"
                                label="Name"
                            />
                        </>
                    )}
                    <TextField
                                required
                                id="outlined-required"
                                label="Email id"
                            />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <Typography variant='p' mt={3}>
                        {!login ? "Already Registered? " : "New? "}
                        <Button onClick={changeState} color="primary" sx={{textTransform: 'none'}}>
                            {!login ? "Login Here" : "Register Here"}
                        </Button>
                    </Typography>
                    <Button variant="contained" color="success" sx={{marginTop:'12px'}}>
                        {!login ? "Register" : "Login"}
                    </Button>
                </div>
            </Box>
            <Footer/>
        </>
    );
}
