import { useState, useEffect } from "react";
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
const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const [UserName, setUserName] = useState("");
  //Keeps getting called again and again in infinite loop
  const usernameGenerator = async () => {
    let username = await axios.get("https://localhost:5000/GenerateUserName");
    return username.data.username;
  };
  useEffect(() => {
    usernameGenerator()
      .then((res) => {
        setUserName(res);
      })
      .catch((err) => {
        if (err) {
          console.error(`You have an error !! ${err}`);
        }
      });
  }, []);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [VPassword, setVPassword] = useState("");
  const SignUp = (e) => {
    e.preventDefault();
    if (
      UserName !== "" &&
      Email !== "" &&
      Password !== "" &&
      VPassword !== ""
    ) {
      VerifyPass();
    } else {
      alert("Kindly fill all the fields");
    }
  };
  const Cancel = (e) => {
    e.preventDefault();
    setEmail("");
    setUserName("");
    setPassword("");
    setVPassword("");
  };
  function checkIfEmailInString(text) {
    //var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    let re = /\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/;
    return re.test(text);
  }
  const VerifyPass = () => {
    if (VPassword === Password) {
      //put post request here
      post().then((resp) => {
        if (
          resp.response.status === 200 &&
          resp.response.data.m === "User Registered"
        ) {
          history.push("/LoginSignUp");
        } else {
          let url = `/error/${resp.response.data.status}/${resp.response.data.m}`;
          return history.push(url);
        }
      });
    } else {
      alert("Password doesn't match");
    }
  };
  const post = async () => {
    let emailCheck = checkIfEmailInString(Email);
    if (emailCheck === true) {
      let doc = { UserName: UserName, Email: Email, Password: Password };
      let response = await axios.post(
        "https://localhost:5000/Users/SignUp",
        doc
      );
      return { response: response };
    } else {
      return { response: null };
    }
  };
  return (
    <Card className={classes.card}>
      <CardHeader
        title="SignUp"
        titleTypographyProps={{ variant: "h4" }}
        style={{ textAlign: "center" }}
      />
      <CardContent>
        <Box component="form" width="auto">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor="UserName" color="secondary">
                  Enter UserName
                </InputLabel>
                <Input
                  color="secondary"
                  id="UserName"
                  type="text"
                  aria-describedby="User-Name"
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                  className={classes.input}
                />
                <FormHelperText id="User-Name">
                  Enter a UserName of Your choice
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor="Email" color="secondary">
                  Email
                </InputLabel>
                <Input
                  color="secondary"
                  id="Email"
                  type="email"
                  aria-describedby="User-Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={classes.input}
                />
                <FormHelperText id="User-Email">
                  Enter Your Email
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
              <FormControl style={{ margin: "auto" }}>
                <InputLabel htmlFor="V-Password" color="secondary">
                  Verify Your Password
                </InputLabel>
                <Input
                  color="secondary"
                  id="V-Password"
                  type="Password"
                  aria-describedby="User-Verified-Password"
                  value={VPassword}
                  onChange={(e) => setVPassword(e.target.value)}
                  className={classes.input}
                />
                <FormHelperText id="User-Verified-Password">
                  Enter Your Password to Verify
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                onClick={SignUp}
              >
                SignUp
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                type="reset"
                color="primary"
                className={classes.cancel}
                onClick={Cancel}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Link to="/LoginSignUp" style={{ textAlign: "center" }}>
                <Typography variant="subtitle1">
                  ‹- Go back and Sign-in
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SignUp;

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
