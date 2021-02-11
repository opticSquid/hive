import { useState } from "react";
import {
  Card,
  Grid,
  CardHeader,
  CardContent,
  Typography,
  FormControlLabel,
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
  useTheme,
  makeStyles,
} from "@material-ui/core";
const UserHandler = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [VPassword, setVPassword] = useState("");
  return (
    <Card>
      <CardHeader
        title="Login/SignUp"
        titleTypographyProps={{ variant: "h4" }}
      />
      <CardContent>
        <Grid container spacing={2}>
          <form>
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
                />
                <FormHelperText id="User-Name" required={true}>
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
                />
                <FormHelperText id="User-Email" requied={true}>
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
                />
                <FormHelperText id="User-Password" requied={true}>
                  Enter Your Password
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
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
                />
                <FormHelperText id="User-Verified-Password" requied={true}>
                  Enter Your Password to Verify
                </FormHelperText>
              </FormControl>
            </Grid>
          </form>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserHandler;

const useStyles = makeStyles((theme) => ({}));
