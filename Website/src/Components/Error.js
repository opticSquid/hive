import { useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Stop from "../Static/stop.jpg";
import StopMob from "../Static/stop-orig.jpg";
import { blue } from "@material-ui/core/colors";
function Error() {
  const { err_code, messege } = useParams();
  const classes = useStyles();
  const history = useHistory();
  // is the minimum width 600px false for mobile devides
  const mediaQuery = useMediaQuery("(min-width:600px)");
  const goBack = () => {
    history.push("/signUp");
  };
  return (
    <Card className={mediaQuery ? classes.root : classes.rootMob}>
      <CardActionArea>
        {mediaQuery ? (
          <CardMedia
            image={Stop}
            title="Not Authorized"
            className={classes.media}
          />
        ) : (
          <CardMedia
            image={StopMob}
            title="Not Authorized"
            className={classes.mediaMob}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Eror: {err_code}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {messege}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={goBack} className={classes.button}>
          &lt; Previous Page
        </Button>
      </CardActions>
    </Card>
  );
}

export default Error;
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  rootMob: {
    marginTop: "35%",
    marginLeft: "3%",
    marginRight: "3%",
  },
  button: {
    color: blue[500],
  },
  media: {
    width: "100%",
    height: 500,
  },
  mediaMob: {
    height: 400,
  },
}));
