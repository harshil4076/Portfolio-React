import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import './App.css';
import patel from './images/profile/patel.jpg';
import hkphoto from './images/hkphotography.png'
import carstack from './images/carstack.png';
import restaurant from './images/restaurant.png';

const useStyles = makeStyles(theme => ({
  root:{
    paddingBottom: "40px",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "100px",
      paddingRight: "100px"
    }
  },
  Introduction :{
    fontWeight: "100",
  },
  profileImageGrid: {
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "30px"
    },
  },
  profileImg :{
    borderRadius: "50%",
    height: "300px",
    width: "300px",
    margin: "50px",
    [theme.breakpoints.down('sm')]:{
      height: "200px",
      width: "200px",
    },
  },
  projectHeading: {
    textAlign: "center",
    fontWeight: "light",
    fontSize: "50px"
  },
  paper: {
    padding: "30px"
  },
  cardRoot:{
    maxWidth: 345,
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}))

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid
        className={classes.root} 
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
          <Grid 
            item
           sm={6} 
           xs={12}
           justify="flex-end"
           container
            direction="row"
            alignItems="center"
            className={classes.profileImageGrid}
           >
            <img src={patel} alt="Profile" className={classes.profileImg} />
          </Grid>
          <Grid 
            item
            sm={6}
            xs={12}
            className={classes.Introduction}
            >
              <Typography variant="h3" gutterBottom>
                  Hey! 
              </Typography>
              <Typography variant="h4" gutterBottom>
              My name is Harshil Patel. 
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              The moment I wrote the first line of code in C , it got me hooked to the world of programming.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              I am a Full Stack Web Developer building cool apps using React, Material-Ui, Express and MongoDb.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
              I also enjoy learning new languages and experimenting with new frameworks.
              </Typography>
              <Link href="https://github.com/harshil4076/" target="_blank">
                  <IconButton aria-label="github link">
                      <GitHubIcon />
                    </IconButton>
              </Link>
                <Link href="https://www.linkedin.com/in/harshil-patel-5157bb14a/" target="_blank">
                  <IconButton aria-label="Linkedin">
                      <LinkedInIcon />
                    </IconButton>
                </Link>
                <Link href="https://docs.google.com/document/d/1hcZHYn6oCEKppzPLOLlAkdExIWqSxa7DN1B8l6-RxPc/edit?usp=sharing" target="_blank">
                  <IconButton aria-label="Resume">
                      <DescriptionIcon />
                    </IconButton>
                </Link>
          </Grid>
      </Grid>
      <p className={classes.projectHeading} >
        Projects
      </p>
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      >
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
            md={4}
            sm={6}
            xs={12}
          >
            <Card className={classes.cardRoot}>
            <CardHeader title="www.carstack.ca" />
            <Link href="http://www.carstack.ca" target="_blank">
                <CardMedia
                image={carstack}
                className={classes.cardMedia}
                title="Carstack.ca"
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This project is built with React and material Ui.
                  Redux for managing state.
                  it is a Car Trader app. User can sign up , Post Ads and trade cars.
                  It uses a custom Api built with Express and Mongo Db.
                  It is deployed on carstack.ca.
                </Typography>
              </CardContent>
              <CardActions className={classes.cardAction} disableSpacing>
                <Link href="https://github.com/harshil4076/carstack-client" target="_blank">
                  <IconButton aria-label="github link">
                      <CodeIcon />
                    </IconButton>
                </Link>
                <Link href="http://www.carstack.ca" target="_blank">
                  <IconButton aria-label="view app">
                    <LinkIcon />
                  </IconButton>
                  </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Card className={classes.cardRoot}>
            <CardHeader title="HK photography" />
            <Link href="https://sleepy-badlands-38091.herokuapp.com/" target="_blank">
                <CardMedia
                image={hkphoto}
                className={classes.cardMedia}
                title="HK phptography"
                />
            </Link>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This project is built with React and material Ui.
                  It uses Unsplash API to load different images every time user refreshes.
                  It is deployed on Heroku.
                </Typography>
              </CardContent>
              <CardActions className={classes.cardAction} disableSpacing>
              <Link href="https://github.com/harshil4076/photography" target="_blank">
                  <IconButton aria-label="github link">
                    <CodeIcon />
                  </IconButton>
               </Link>   
                <Link href="https://sleepy-badlands-38091.herokuapp.com/" target="_blank">
                  <IconButton aria-label="view app">
                    <LinkIcon />
                  </IconButton>
                </Link>
              </CardActions>
            </Card>
            </Grid>
            <Grid
            item
            md={4}
            sm={6}
            xs={12}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Card className={classes.cardRoot}>
              <CardHeader title="Restaurant Finder" />
              <Link href="https://sharp-swirles-b5d892.netlify.app/" target="_blank">
                <CardMedia
                image={restaurant}
                className={classes.cardMedia}
                title="Restaurant Finder"
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This project is built with React and Css.
                  It used Redux for state management. Axios for Api calls.
                  It uses opentable.herokuapp.com/api.
                  A user can search restaurants based on city name , address and postal code.
                  It is deployed on Netlify.
                </Typography>
              </CardContent>
              <CardActions className={classes.cardAction} disableSpacing>
              <Link href="https://github.com/harshil4076/restaurant-finder" target="_blank">
                  <IconButton aria-label="github link">
                    <CodeIcon />
                  </IconButton>
              </Link>
              <Link href="https://sharp-swirles-b5d892.netlify.app/" target="_blank">
                  <IconButton aria-label="view app">
                    <LinkIcon />
                  </IconButton>
              </Link>
              </CardActions>
            </Card>
            </Grid>
      </Grid>
    </div>
  );
}

export default App;
