import { useState, useEffect } from "react";
import {
  Card,
  Grid,
  CardHeader,
  CardContent,
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
  makeStyles,
  Button,
  Box,
  useMediaQuery,
  CardMedia,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import FaceIcon from "@material-ui/icons/Face";
import axios from "axios";
import { red } from "@material-ui/core/colors";
const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const [UserName, setUserName] = useState("");
  // is the minimum width 600px false for mobile devides
  const mediaQuery = useMediaQuery("(min-width:600px)");
  const usernameGenerator = async () => {
    let username = await axios.get(
      "https://localhost:5000/Features/GenerateUserName"
    );
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
    <Card className={mediaQuery ? classes.cardDesktop : classes.card}>
      <CardMedia>
        <FaceIcon className={mediaQuery ? classes.IconDesktop : classes.Icon} />
      </CardMedia>
      <CardHeader
        title="SignUp"
        titleTypographyProps={{ variant: "h4" }}
        style={{ textAlign: "center" }}
      />
      <CardContent>
        <Box component="form" width="auto">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl className={mediaQuery ? classes.FormDesktop : null}>
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
                  className={mediaQuery ? classes.inputDesktop : classes.input}
                />
                <FormHelperText id="User-Name">
                  Enter a UserName of Your choice OR use the generated User Name
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={mediaQuery ? classes.FormDesktop : null}>
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
                  className={mediaQuery ? classes.inputDesktop : classes.input}
                />
                <FormHelperText id="User-Email">
                  Enter Your Email
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={mediaQuery ? classes.FormDesktop : null}>
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
                  className={mediaQuery ? classes.inputDesktop : classes.input}
                />
                <FormHelperText id="User-Password">
                  Enter Your Password
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={mediaQuery ? classes.FormDesktop : null}>
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
                  className={mediaQuery ? classes.inputDesktop : classes.input}
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
                className={mediaQuery ? classes.SignUpDesktop : null}
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
              <Button variant="outlined" className={mediaQuery?classes.SignInDesktop:classes.Signin}>
                <Link to="/LoginSignUp" style={{ textDecoration: "none", color:"inherit" }}>
                  Existing User? Sign in
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SignUp;

const useStyles = makeStyles((theme) => ({
  cardDesktop: {
    marginTop: "1%",
    marginLeft: "20%",
    width: "60%",
    boxShadow: "0px 0px 10px #bdbdbd",
  },
  card: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "30%",
  },
  FormDesktop: {
    marginLeft: "10%",
    width: "80%",
    marginTop: "-1%",
  },
  inputDesktop: {
    widht: "100%",
  },
  input: {
    width: 290,
  },
  IconDesktop: {
    fontSize: 200,
    marginLeft: "39%",
  },
  Icon: {
    fontSize: 100,
    marginLeft: "35%",
  },
  SignUpDesktop: {
    marginLeft: "50%",
  },
  cancel: {
    marginLeft: "30%",
  },
  SignInDesktop: {
    marginLeft: "38%",
    color: red[700],
  },
  Signin:{
    marginLeft: "13%",
    color: red[700],
  }
}));
