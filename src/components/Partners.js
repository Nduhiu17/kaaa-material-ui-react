import React, { Fragment } from 'react'
import { Paper, Grid, Toolbar } from '@material-ui/core'

export default function Partners() {
    return (
        <Fragment>
            <Toolbar></Toolbar>
            <Paper>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={2}>
                        a
                    </Grid>
                    <Grid item sm={12} md={8}>
                        b
                    </Grid>
                </Grid>
            </Paper>
        </Fragment>
   
    )
}
