import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './karuraData';
import wiln from '../../assets/gallery/wiln/1-wln.jpeg'
import wiln2 from '../../assets/gallery/wiln/2-wln.jpeg'
import wiln3 from '../../assets/gallery/wiln/3-wln.jpeg'
import wiln4 from '../../assets/gallery/wiln/4-wln.jpeg'
import wiln5 from '../../assets/gallery/wiln/5.jpeg'
import wiln6 from '../../assets/gallery/wiln/6.jpeg'



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
        img: wiln,
         title: 'WILN',
         author: 'author',
       },
       {
        img: wiln2,
         title: 'WILN',
         author: 'author',
       },
       {
        img: wiln3,
         title: 'WILN',
         author: 'author',
       },
       {
        img: wiln4,
         title: 'WILN',
         author: 'author',
       },
       {
        img: wiln5,
         title: 'WILN',
         author: 'author',
       },
       
       {
        img: wiln6,
         title: 'WILN',
         author: 'author',
       }     
  
     ];
export default function Wiln() {
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
