import React, { Fragment } from 'react'
import { Paper, Grid, CardHeader, CardContent, Toolbar } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem  from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ObjectiveSlider from './sliders/ObjectiveSlider'

function Objectives() {
    return (
        <Fragment>
               <Toolbar>
                </Toolbar>
                <Toolbar>
                </Toolbar>
            <Grid container spacing={2} justify='space-around'>
                <Grid item xs={12} sm={5}>
                    <Paper elevation={6}>
                    <CardHeader 
                            title="Our Team"/>
                    <CardContent>
                        <ObjectiveSlider />
                    </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={5}>
                <Paper elevation={6}>
                            <CardHeader 
                            // className={classes.CardHeader}
                            title="Objectives"/>
                            <CardContent>
                                <List component="nav">
                                    <ListItem button>
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="To benefit individually and collectively from the education and experience former students from Kenya have gained in Australian Universities and/or the Australian host organization." />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="To assist the members to achieve their full potential through professional training, (capacity building and enhancing their leadership skills)." />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <DraftsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="To foster friendly relations between the citizens of the two countries. Kenya and Australia, and provide opportunities for the Australian Government and other Australian organisations to maintain links with alumni." />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <DraftsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="To assist potential students with information about the Australia Awards Scholarships, University placements and life in Australia." />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Paper>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Objectives
