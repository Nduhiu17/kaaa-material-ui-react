import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

import MainSlider from "./sliders/MainSlider";
import About from "./About";
import Objectives from "./Objectives";
import EventsAndMembership from "./EventsAndMembership";
import Main from "./gallery/Main";
import Footer from "./Footer";
import Logo from "../assets/img/KAAA_Colour Logo.jpg";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  letfNav:{
    display:'flex',
  },
  title:{
      marginTop:'auto',
      marginBottom:'auto',
      fontWeight:'bold',
      marginLeft:'12px',
      fontSize:'20px'
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="inherit">
        <Toolbar className={classes.nav} id='nav'>
          <Typography variant="h6" className={classes.letfNav}>
              <img src={Logo} alt="kaa" style={{ height: 60, width: 60 }} />
              <Typography className={classes.title}><a href='#home'>Home</a></Typography>
          </Typography>
          <Typography>
           <a href='#about'><Button style={{color:'#1C6F47'}}>About Us</Button></a> 
           <a href='#membership'><Button style={{color:'#1C6F47'}}>Membership</Button></a> 
           <a href='#gallery'><Button style={{color:'#1C6F47'}}>Gallery</Button></a> 
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Box my={2}>
        <MainSlider />
        <About />
        <Objectives />
        <EventsAndMembership />
        <Main />
        <Footer />
      </Box>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
