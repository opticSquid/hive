import { useState } from "react";
import {
  Card,
  Grid,
  CardHeader,
  CardContent,
  Typography,
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
  makeStyles,
  Button,
  Box,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [UserEmail, setUserEmail] = useState("");

  const [Password, setPassword] = useState("");

  const Signin = (e) => {
    e.preventDefault();
    if (UserEmail !== "" && Password !== "") {
      //Post request goes here
      post().then((response)=>{
        console.log(response.data);
        history.push("/")
      });
    } else {
      alert("Kindly fill all the fields");
    }
  };
  const post = async() =>{
    let request = {Email:UserEmail,Password:Password}
    let response = await axios.post("https://localhost:5000/Users/Login",request);
    return response;
  }
  return (
    <Card className={classes.card}>
      <CardHeader
        title="Sign-in"
        titleTypographyProps={{ variant: "h4" }}
        style={{ textAlign: "center" }}
      />
      <CardContent>
        <Box component="form" width="auto">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor="Email" color="secondary">
                  Email
                </InputLabel>
                <Input
                  color="secondary"
                  id="Email"
                  type="text"
                  aria-describedby="User Email"
                  value={UserEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className={classes.input}
                />
                <FormHelperText id="User-Name">
                  Enter your Email
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor="Password" color="secondary">
                  Password
                </InputLabel>
                <Input
                  color="secondary"
                  id="Password"
                  type="Password"
                  aria-describedby="User-Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={classes.input}
                />
                <FormHelperText id="User-Password">
                  Enter Your Password
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                onClick={Signin}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Link to="/signUp">
                <Typography variant="subtitle1">New User? SignUp</Typography>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/forgotPasword">
                <Typography variant="subtitle1">Forgot Password?</Typography>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/" style={{ textAlign: "center" }}>
                <Typography variant="subtitle1">🚴‍♀️Go Back Home</Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Login;

const useStyles = makeStyles((theme) => ({
  card: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "30%",
  },
  input: {
    width: 290,
  },
  cancel: {
    marginLeft: "30%",
  },
}));
