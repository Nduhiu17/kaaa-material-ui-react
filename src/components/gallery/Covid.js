import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './karuraData';
import covid1 from '../../assets/gallery/covid-project/covid1.jpeg'
import covid2 from '../../assets/gallery/covid-project/covid2.jpeg'
import covid3 from '../../assets/gallery/covid-project/covid3.jpeg'
import covid4 from '../../assets/gallery/covid-project/covid4.jpeg'
import covid5 from '../../assets/gallery/covid-project/covid5.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

 const tileData = [
       {
        img: covid1,
         title: 'Covid 19 Face Masks',
         author: 'author',
       },
       {
        img: covid2,
         title: 'Covid 19 Face Masks',
         author: 'author',
       },
       {
        img: covid3,
         title: 'Covid 19 Face Masks',
         author: 'author',
       },
       {
        img: covid4,
         title: 'Covid 19 Face Masks',
         author: 'author',
       },
       {
        img: covid5,
         title: 'Covid 19 Face Masks',
         author: 'author',
       },
     
     ];
export default function Covid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
