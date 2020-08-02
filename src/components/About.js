import React from "react";
import { Card, CardHeader, Grid, CardContent, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const styles = (theme) => ({
  CardHeader: {
   
  },
});

export default withStyles(styles)( 
    ({classes}) => (
        <Paper>
            <Grid container>
                <Grid item xs={12} sm={4}>
                <Paper elevation={3}>
                    <CardHeader 
                    className={classes.CardHeader}
                    title="Membership"/>
                    <CardContent>
                    MEMBERSHIP is open to all Australia Awards Scholarships alumni who wish to join the network, as well as those whose study in Australia was either privately funded or funded through a home government and other scholarships, and those who have studied in an accredited Australian educational institution and who support the objectives of the Association
                    </CardContent>
                </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Paper elevation={3}>
                    <CardHeader 
                    className={classes.CardHeader}
                    title="Our Mission"/>
                    <CardContent>
                    MEMBERSHIP is open to all Australia Awards Scholarships alumni who wish to join the network, as well as those whose study in Australia was either privately funded or funded through a home government and other scholarships, and those who have studied in an accredited Australian educational institution and who support the objectives of the Association
                    </CardContent>
                </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Paper elevation={3}>
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
     </Paper>
));
