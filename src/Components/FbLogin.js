import {Grid,Button} from "@material-ui/core";

const Login = ()  =>
{
    return <div></div>
}
function FbLogin(props) {
    return (
        <Grid container>
            <Grid item xs={12} spacing={2}>
                <Button variant="contained" color="primary" onClick={Login}>
                    Facebook Login
                </Button>
            </Grid>
        </Grid>

    );
}

export default FbLogin;