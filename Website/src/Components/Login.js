import { useState } from "react";
import {
  Card,
  Grid,
  CardHeader,
  CardContent,
  CardMedia,
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
  makeStyles,
  Button,
  Box,
  useMediaQuery,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { blue, red } from "@material-ui/core/colors";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  // is the minimum width 600px false for mobile devides
  const mediaQuery = useMediaQuery("(min-width:600px)");
  const [UserEmail, setUserEmail] = useState("");

  const [Password, setPassword] = useState("");

  const Signin = (e) => {
    e.preventDefault();
    if (UserEmail !== "" && Password !== "") {
      //Post request goes here
      post().then((response) => {
        console.log(response.data);
        history.push("/");
      });
    } else {
      alert("Kindly fill all the fields");
    }
  };
  const post = async () => {
    let request = { Email: UserEmail, Password: Password };
    let response = await axios.post(
      "https://localhost:5000/Users/Login",
      request
    );
    return response;
  };
  return (
    <Card className={mediaQuery ? classes.cardDesktop : classes.card}>
      <CardMedia>
        <AccountCircleIcon
          className={mediaQuery ? classes.IconDesktop : classes.Icon}
        />
      </CardMedia>
      <CardHeader
        title="Sign-in"
        titleTypographyProps={{ variant: "h4" }}
        className={mediaQuery ? classes.CardHeaderDesktop : classes.CardHeader}
      />
      <CardContent>
        <Box component="form" width="auto">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel
                  htmlFor="Email"
                  color="secondary"
                  className={mediaQuery ? classes.inputLabelDesktop : null}
                >
                  Email
                </InputLabel>
                <Input
                  color="secondary"
                  id="Email"
                  type="text"
                  aria-describedby="User Email"
                  value={UserEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className={mediaQuery ? classes.inputDesktop : classes.input}
                />
                <FormHelperText
                  id="User-Name"
                  className={mediaQuery ? classes.inputLabelDesktop : null}
                >
                  Enter your Email
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel
                  htmlFor="Password"
                  color="secondary"
                  className={mediaQuery ? classes.inputLabelDesktop : null}
                >
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
                <FormHelperText
                  id="User-Password"
                  className={mediaQuery ? classes.inputLabelDesktop : null}
                >
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
                className={mediaQuery ? classes.ButtonDesktop : null}
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                className={
                  mediaQuery ? classes.NewUserLinkDesktop : classes.NewUserLink
                }
              >
                <Link to="/signUp" className={classes.link}>
                  New User? SignUp
                </Link>
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                variant="outlined"
                className={
                  mediaQuery
                    ? classes.ForgotPasswordLinkDesktop
                    : classes.ForgotPasswordLink
                }
              >
                <Link to="/forgotPasword" className={classes.link}>
                  Forgot Password
                </Link>
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                startIcon={<HomeRoundedIcon />}
                className={mediaQuery ? classes.HomeDesktop : classes.Home}
              >
                <Link to="/" className={classes.link}>
                  Home
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Login;

const useStyles = makeStyles((theme) => ({
  cardDesktop: {
    marginLeft: "20%",
    marginTop: "4%",
    width: "60%",
    boxShadow: "0px 0px 10px #bdbdbd",
  },
  card: {
    margin: "30% 5% 0% 5%",
  },
  CardHeaderDesktop: {
    textAlign: "center",
    marginTop: "-3%",
  },
  CardHeader: {
    textAlign: "center",
  },
  IconDesktop: {
    fontSize: 200,
    marginLeft: "39%",
  },
  Icon: {
    fontSize: 100,
    marginLeft: "35%",
    marginTop: "6%",
  },
  inputDesktop: {
    width: 500,
    marginLeft: "35%",
  },
  inputLabelDesktop: {
    marginLeft: "35%",
  },
  ButtonDesktop: {
    marginLeft: "47%",
  },
  NewUserLinkDesktop: {
    marginLeft: "60%",
    color: blue[500],
  },
  NewUserLink: {
    color: blue[500],
  },
  ForgotPasswordLinkDesktop: {
    color: red[500],
    marginLeft: "10%",
  },
  ForgotPasswordLink: {
    color: red[500],
  },
  HomeDesktop: {
    marginLeft: "47%",
  },
  Home: {
    marginLeft: "30%",
  },
  input: {
    width: 290,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  cancel: {
    marginLeft: "30%",
  },
}));
