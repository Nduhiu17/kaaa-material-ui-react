import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import List from '@material-ui/core/List';
import ListItem  from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

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
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MembershipTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Full Member" {...a11yProps(0)} />
          <Tab label="Associate Member" {...a11yProps(1)} />
          <Tab label="Corporate Member" {...a11yProps(2)} />
          <Tab label="Honary Member" {...a11yProps(3)} />
          <Tab label="Prescribed Fee" {...a11yProps(4)} />
        </Tabs>
      </Typography>
      <TabPanel value={value} index={0}>
        <Typography component='p'>
        A person qualifies to be an active member of the Association if that person has successfully completed a course(s) of training /study from any Accredited Australian educational institution, or successfully completed an Australia Award. This shall be subject to the approval of the committee, and payment of the prescribed fees.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography component="p">
        A person qualifies to be an honorary member if that person has been granted membership by the committee, in recognition of their past, present or affirmed contribution to the Association.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography component="p">
        An Institution qualifies to be a corporate member if they are interested in the Association. This shall be subject to the approval of the committee, and payment of the prescribed fees.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography component="p">
        A person qualifies to be an honorary member if that person has been granted membership by the committee, in recognition of their past, present or affirmed contribution to the Association.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography component="p">
        Every member shall pay a one off membership fee (includes annual fee for the first year) and an annual subscription fee not later than the last Friday or working day of February each subsequent year as follows:
        </Typography>
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
      </TabPanel>
    </div>
  );
}
