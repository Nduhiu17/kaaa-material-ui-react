import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './karuraData';
import one1 from '../../assets/gallery/one-heart-foundation/1h.jpg'
import one2 from '../../assets/gallery/one-heart-foundation/2.jpg'
import one3 from '../../assets/gallery/one-heart-foundation/3.jpg'
import one4 from '../../assets/gallery/one-heart-foundation/4.jpg'
import one5 from '../../assets/gallery/one-heart-foundation/5.jpg'
import one6 from '../../assets/gallery/one-heart-foundation/6.jpg'
import one7 from '../../assets/gallery/one-heart-foundation/7.jpg'
import one8 from '../../assets/gallery/one-heart-foundation/8.jpg'
import one9 from '../../assets/gallery/one-heart-foundation/9.jpg'
import one10 from '../../assets/gallery/one-heart-foundation/10.jpg'

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
        img: one1,
         title: 'One Heart',
         author: 'author',
       },
       {
        img: one2,
         title: 'One Heart',
         author: 'author',
       },
       {
        img: one3,
         title: 'One Heart',
         author: 'author',
       },
       {
        img: one4,
         title: 'One Heart',
         author: 'author',
       },
       {
        img: one5,
         title: 'One Heart',
         author: 'author',
       },
       {
        img: one6,
         title: 'One Heart',
         author: 'author',
       },
       {
        img: one7,
         title: 'One Heart',
         author: 'author',
       },
       {
        img: one8,
         title: 'One Heart',
         author: 'author',
       },
       {
        img: one9,
         title: 'One Heart',
         author: 'author',
       },
       {
        img: one10,
         title: 'One Heart',
         author: 'author',
       },
     ];
export default function OneHeart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={6}>
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
