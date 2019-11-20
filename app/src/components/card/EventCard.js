import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Api from '../../util/Api';
import CustomizedSnackbars from '../snackbar/CustomSnackBar';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ event, image, isEventSub = true }) {
  const classes = useStyles();
  const [stateSnackbar, setStateSnackbar] = useState({ open: false, message: '', type: 'success' });

  const handleRegistry = async (event) => {
    const user = JSON.parse(sessionStorage.getItem('user')).id
    const response = await Api.userEvent.create({ user, event });
    window.location.reload();
    setStateSnackbar({ open: true, message: 'Usuário cadastrado com sucesso', type: 'success' });
  }

  const handleUnregistry = async (event) => {
    const user = JSON.parse(sessionStorage.getItem('user')).id
    const response = await Api.userEvent.unsubscribe({ id_user_account: user, id_event: event });
    window.location.reload();
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {event.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Local</strong>: {event.place}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Preço</strong>: R$ {event.price}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" 
          onClick={() => isEventSub ? handleRegistry(event.id) : handleUnregistry(event.id)}>
         {isEventSub ? "Inscrever-se" : "Cancelar inscrição"}
        </Button>
      </CardActions>
    </Card>
  );
}