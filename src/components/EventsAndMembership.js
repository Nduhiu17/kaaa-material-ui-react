import React, { Fragment } from 'react'
import { Paper, Grid, CardHeader, CardContent, Toolbar, Typography } from '@material-ui/core'
import ActivitiesSlider from './sliders/ActivitiesSlider'
import MembershipTabs from '../components/MembershipTabs'

function EventsAndMembership() {
    return (
        <Fragment>
               <Toolbar id='membership'>
                </Toolbar>
                <Toolbar>
                </Toolbar>
            <Grid container justify='space-between' spacing={2}>
                <Grid item xs={12} sm={8}>
                    <Paper elevation={6}>
                        <CardHeader 
                        // className={classes.CardHeader}
                        title="Membership criteria"/>
                        <CardContent>
                            <MembershipTabs />
                        </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography gutterBottom>
                        <Paper elevation={6}>
                            <CardHeader 
                                    title="Our Activies"/>
                            <CardContent>
                                <ActivitiesSlider />
                            </CardContent>
                        </Paper>
                    </Typography>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default EventsAndMembership
