import React, { useEffect, useState } from 'react'
import Api from '../util/Api';
import EventCard from '../components/card/EventCard';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      width: '100%',
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));

const eventImages = ["https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/4fa/43b/bb-/small/data?1573251117","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/8fd/781/8b-/small/data?1571255266","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/416/37b/24-/small/data?1564648415","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/759/164/43-/small/data?1572561745","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/625/f1d/3f-/small/data?1571793178","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/eee/c08/cc-/small/data?1572368897","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/e33/4d6/14-/small/data?1569420294","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/842/4b7/ab-/small/data?1572464564","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/e29/737/64-/small/data?1568902133","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/6f6/3e8/37-/small/data?1565017528","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/918/b77/04-/small/data?1573741283","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/68d/250/32-/small/data?1573592140","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/05f/f18/94-/small/data?1573524061","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/5dd/d73/8c-/small/data?1571773509","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/a7a/1d3/05-/small/data?1573233860","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/1fc/aa9/be-/small/data?1573478313","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/673/a3b/a3-/small/data?1571773613","https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/358/982/c9-/small/data?1572910825"]

const MyEvent = (props) => {
    const [state, setState] = useState([])
    useEffect(() => {
        async function getAllEvents() {
            const id = JSON.parse(sessionStorage.getItem('user')).id
            const events = await Api.userEvent.getSubscribedEvents(id);
            setState(events.data);
            console.log(events.data);
        }
        getAllEvents()
    }, [])

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} lg={3}>
                  {state !== [] && state.map((event, idx) => {
                      return <EventCard key={idx} event={event} image={eventImages[event.id]} isEventSub={false} />
                  })}
                  {state.length == 0 && <div>Você não possui nenhum evento</div>}
                </Grid>
            </Grid>
          </Container>
        </div>
    )
};

export default MyEvent;