import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './karuraData';
import social from '../../assets/gallery/social-dinner/1.jpg'
import social1 from '../../assets/gallery/social-dinner/2.jpg'
import social2 from '../../assets/gallery/social-dinner/3.jpg'
import social3 from '../../assets/gallery/social-dinner/4.jpg'
import social4 from '../../assets/gallery/social-dinner/5.jpg'
import social5 from '../../assets/gallery/social-dinner/6.jpg'
import social6 from '../../assets/gallery/social-dinner/7.jpg'
import social7 from '../../assets/gallery/social-dinner/8.jpg'
import social8 from '../../assets/gallery/social-dinner/9.jpg'



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
        img: social,
         title: 'Social Dinner',
         author: 'author',
       },
       {
        img: social1,
         title: 'Social Dinner',
         author: 'author',
       },
       {
        img: social2,
         title: 'Social Dinner',
         author: 'author',
       },
        {
        img: social3,
         title: 'Social Dinner',
         author: 'author',
       },
       {
        img: social4,
         title: 'Social Dinner',
         author: 'author',
       },
       {
        img: social5,
         title: 'Social Dinner',
         author: 'author',
       },
       {
        img: social6,
         title: 'Social Dinner',
         author: 'author',
       },
       {
        img: social7,
         title: 'Social Dinner',
         author: 'author',
       },
       {
        img: social8,
         title: 'Social Dinner',
         author: 'author',
       }
       

       
  
     ];
export default function SocialDinner() {
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
