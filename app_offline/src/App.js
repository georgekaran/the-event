import React, { useEffect } from 'react';
import EventList from './components/events/EventsList'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function App(props) {
  return (
    <div className="App">
      <Typography component="h1" variant="h5">
            Lista de Eventos
      </Typography>
      <EventList />
    </div>
  );
}

export default App;