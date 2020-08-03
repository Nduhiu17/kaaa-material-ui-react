import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon  from '@material-ui/icons/Menu';
import Logo from '../assets/img/KAAA_Colour Logo.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    Logo: {
      width:80,
      height:45
    }
  }),
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <img src={  Logo } alt='kaaa' className={classes.Logo}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            KAAA
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Membership</Button>
          <Button color="inherit">Gallery</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

