import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
    footer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    }
  }),
);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Toolbar>
            
        </Toolbar>
      <AppBar position="static" color="transparent" className={classes.footer}>
        <Toolbar>
          <Typography component="span">
            &copy; KAAA 2020
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

