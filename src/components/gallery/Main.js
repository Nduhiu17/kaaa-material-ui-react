import React, { Fragment } from 'react'
import { Paper, Grid, Toolbar } from '@material-ui/core'
import GalleryTabs from './GalleryTabs'

function Main() {
    return (
      <Fragment>
          <Toolbar>
          </Toolbar>
          <Toolbar>
            </Toolbar>
          <Paper elevation={6}>
              <Grid container>
                  <Grid item xs={12} sm={12} md={12}>
                      <GalleryTabs />
                  </Grid>
              </Grid>
          </Paper>
      </Fragment>
    )
}

export default Main
