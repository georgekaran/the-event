import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { executeQuery } from '../database/database';

const CONSULT_USER_EVENT_URL = 'http://localhost:5011/api';

const consult_all_events = '';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

export default function CheckIn(props) {
    const [stateUserNotCheckin, setStateUserNotCheckin] = useState()
    const classes = useStyles();
    let { id } = useParams();

    useEffect(() => {
        executeQuery(`select uc.* 
        from user_event ue 
        left join user_account uc on (uc.id = ue.id_user_account)
        inner join user_event_checkin uec on (ue.id = uec.id_user_event)
        where ue.id_event = ${id}`, (results) => {
            setStateUserNotCheckin(resp.data)
            console.log(resp.data)
        })
        // axios.get(CONSULT_USER_EVENT_URL + "/event/" + id)
        //     .then((resp) => {
        //         setStateUserNotCheckin(resp.data)
        //         console.log(resp.data)
        //     }).catch((e) => {
        //         console.log(e);
        //     })
    }, [])

    const handleSetCheckin = (userId) => {

    }

    return (
        <div>
            <Button variant="contained" color="primary" className={classes.button}>
                Adicionar Usuário
            </Button>
            <Typography component="h1" variant="h5">
                Usuários que já registraram CheckIn:
            </Typography>
            {stateUserNotCheckin && stateUserNotCheckin.map(user => <p>{user.name}</p>)}
            <Typography component="h1" variant="h5">
                Usuários que ainda não registraram CheckIn:
            </Typography>
            
        </div>
    )
}