import React from "react";
import { Grid,Paper,Avatar,TextField, FormControlLabel,Checkbox,Button,Typography,Link } from "@mui/material";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';



const Login =()=>{
    const paperStyle={padding:20, height:'70vh', width:280, margin:'20px auto'}
    const avatarStyle={backgroundColor:'#27a576'}
    const btnStyle={margin:'10px, 10px'}
    return(
        <Grid>
            <Paper elevation ={10} style={paperStyle} >
                
                <Grid align='center' >
                    <Avatar style={avatarStyle}><Person2OutlinedIcon/></Avatar>
                    <h2> Sign In to your Account</h2>
                </Grid>
                <TextField label='Username'placeholder="Enter Username" variant="standard" fullWidth required/>
                <TextField label='Password' placeholder="Enter Password" type={"password"} variant="standard" fullWidth required/>
                <FormControlLabel
                control={
                    <Checkbox
                    name="checkdB"
                    color="primary"
                    />
                }
                label="Keep me Logged in"
                />
                <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth required>Sign In</Button>
                <Typography>
                    <Link href="#">
                        Forgot Password?
                    </Link>
                </Typography>
                <Typography>
                    New member?
                    <Link href="#">
                    Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )

}

export default Login;