import { useState } from "react";
import { Grid} from "@material-ui/core";
// import axios from "axios";
import FacebookLogin from 'react-facebook-login';
const FbLogin = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <FacebookLogin
    appId=
    autoLoad={true}
    fields="name,email,picture"
    
    callback={responseFacebook} />
      </Grid>
    </Grid>
  );
};

export default FbLogin;
//const [Response, setResponse] = useState("");
//   const login = () => {
//     const options = {
//       method: "GET",
//       url: "https://localhost:5000/login/fblogin",
//     };
//     axios
//       .request(options)
//       .then((response) => {
//         setResponse(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };