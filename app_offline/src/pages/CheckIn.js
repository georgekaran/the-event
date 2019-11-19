import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const CONSULT_USER_EVENT_URL = 'http://localhost:5011/api';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

export default function CheckIn(props) {
    const [state, setState] = useState()
    const classes = useStyles();
    let { id } = useParams();

    useEffect(() => {
        axios.get(CONSULT_USER_EVENT_URL + "/event/" + id)
            .then((resp) => {
                setState(resp.data)
            }).catch((e) => {
                console.log(e);
            })
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