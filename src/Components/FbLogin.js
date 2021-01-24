import { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import axios from "axios";
const FbLogin = (props) => {
  const [Response, setResponse] = useState("");
  const login = () => {
    const options = {
      method: "GET",
      url: "http://localhost:5000/login/fblogin",
    };
    axios
      .request(options)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={login}>
          Facebook Login
        </Button>
      </Grid>
      <Grid item xs={12}>
        {Response.messege}
      </Grid>
    </Grid>
  );
};

export default FbLogin;
