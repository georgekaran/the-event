import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const EVENT_URL = 'http://localhost:5004/api';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

export default function CheckIn(props) {
    const classes = useStyles();
    let { id } = useParams();

    useEffect(() => {

    }, [])

    return (
        <div>
            <Button variant="contained" color="primary" className={classes.button}>
                Adicionar Usuário
            </Button>
            <Typography component="h1" variant="h5">
                Usuários que já registraram CheckIn:
            </Typography>
            <Typography component="h1" variant="h5">
                Usuários que ainda não registraram CheckIn:
            </Typography>
        </div>
    )
}