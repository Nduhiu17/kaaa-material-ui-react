import React, { Fragment } from "react";
import { CardHeader, Grid, CardContent, Paper, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem  from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const styles = (theme) => ({
  CardHeader: {
   color:'#1C6F47'
  },
});

export default withStyles(styles)( 
    ({classes}) => (
        <Fragment>
            <Toolbar id="about">
            </Toolbar>
            <Toolbar>
            </Toolbar>
                <Grid container spacing={2} alignContent='center' alignItems='center'>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={6}>
                            <CardHeader 
                            className={classes.CardHeader}
                            title="Membership"/>
                            <CardContent>
                            MEMBERSHIP is open to all Australia Awards Scholarships alumni who wish to join the network, as well as those whose study in Australia was either privately funded or funded through a home government and other scholarships, and those who have studied in an accredited Australian educational institution and who support the objectives of the Association
                            </CardContent>
                            <CardHeader 
                            className={classes.CardHeader}
                            title="Our Mission"/>
                            <CardContent>
                            To enhance and champion comprehensive expertise and knowledge sharing through our innovative capacity building, collaboration and networking
                            </CardContent>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={6}>
                            <CardHeader 
                            className={classes.CardHeader}
                            title="Our Vision"/>
                            <CardContent>
                            A world class Australian Alumni Association that contributes to sustainable development of the Kenyan Society
                            </CardContent>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Paper elevation={6}>
                        <CardHeader 
                        className={classes.CardHeader}
                        title="Core Values"/>
                        <CardContent>
                            <List component="nav">
                                <ListItem button>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary=" We maintain and propagate excellence, high level of knowledge, respective skills and standards as we provide respective services to our communities." />
                                </ListItem>
                                <ListItem button>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="We show impartiality, transparency, accountability and honesty whilst upholding the highest ethical standards in any service provision." />
                                </ListItem>
                                <ListItem button>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary=" We contribute exhaustively to the activities of the team with ease to address shared concerns through common effort." />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Paper>
                    </Grid>
                </Grid>
     </Fragment>
));
