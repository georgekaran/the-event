import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const eventImages = ["https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/4fa/43b/bb-/small/data?1573251117","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/8fd/781/8b-/small/data?1571255266","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/416/37b/24-/small/data?1564648415","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/759/164/43-/small/data?1572561745","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/625/f1d/3f-/small/data?1571793178","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/eee/c08/cc-/small/data?1572368897","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/e33/4d6/14-/small/data?1569420294","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/842/4b7/ab-/small/data?1572464564","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/e29/737/64-/small/data?1568902133","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/6f6/3e8/37-/small/data?1565017528","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/918/b77/04-/small/data?1573741283","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/68d/250/32-/small/data?1573592140","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/05f/f18/94-/small/data?1573524061","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/5dd/d73/8c-/small/data?1571773509","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/a7a/1d3/05-/small/data?1573233860","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/1fc/aa9/be-/small/data?1573478313","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/673/a3b/a3-/small/data?1571773613","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/358/982/c9-/small/data?1572910825"]

const EVENT_URL = 'http://localhost:5004/api';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function EventList(props) {
  const [stateEvents, setStateEvents] = useState([])
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    axios.get(EVENT_URL)
    .then(resp => {
        console.log(resp);
        setStateEvents(resp.data);
    }).catch(e => {
        console.log(e);
    })
  }, [])

  const handleOnItemClick = (id) => {
    history.push(`/event/${id}`)
  };

  return (
    <List className={classes.root}>
        {stateEvents.map((event, idx) => {
           return (
            <ListItem style={{ cursor: 'pointer' }} key={idx} onClick={() => handleOnItemClick(event.id)}>
              <ListItemAvatar>
                <Avatar src={eventImages[event.id]}>
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={event.name} secondary={`Data: ${moment(new Date(event.date)).format('DD/MM/YYYY')} 
                | Local: ${event.place}`} />
            </ListItem>
           ) 
        })}
    </List>
  );
}