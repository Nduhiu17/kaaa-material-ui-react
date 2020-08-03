import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SocialDinner from './SocialDInner'
import Karura from './Karura'
import Wiln from './Wiln'
import OneHeart from './OneHeart'
import AngelCenter from './AngelCenter'
import Covid from './Covid'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    width:'100%',
    backgroundColor: theme.palette.background.paper,
  },
 Tabs:{
      display:'flex',
      justifyContent:'center'
  }
}));

export default function GalleryTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Typography className={classes.root}>
      <Typography variant='h6' align='center'>
      Our Gallery
      </Typography>
      <Typography position="static" color="default" className={classes.Tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Karura Tree Planting" {...a11yProps(0)} />
          <Tab label="Social Dinner" {...a11yProps(1)} />
          <Tab label="Women in leadership" {...a11yProps(2)} />
          <Tab label="One Heart Foundation" {...a11yProps(3)} />
          <Tab label="At Children of Angel Center" {...a11yProps(4)} />
          <Tab label="Face mask project" {...a11yProps(5)} />
        </Tabs>
      </Typography>
      <TabPanel value={value} index={0}>
        <Typography component='div'>
            <Karura />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography component="div">
            <SocialDinner />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography component="div">
            <Wiln />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography component="p">
            <OneHeart />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography component="p">
            <AngelCenter />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Typography component="p">
            <Covid />
        </Typography>
      </TabPanel>
    </Typography>
  );
}
