import { Grid } from "@material-ui/core";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
const FbLogin = () => {
  const responseFacebook = (response) => {
    console.log(response);
    axios.post("https://localhost:5000/login/fblogin/submit",response);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FacebookLogin
          appId="3921403001203159"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </Grid>
    </Grid>
  );
};

export default FbLogin;
