import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Typography from '@material-ui/core/Typography';
import Api from '../util/Api';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function Certificate() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [state, setState] = React.useState([]);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        async function getAllEvents() {
            const id = JSON.parse(sessionStorage.getItem('user')).id
            const events = await Api.userEvent.getCheckin(id);
            setState(events.data);
            console.log(events.data);
        }
        getAllEvents()
    }, [])

    const handleGenerateCertificate = () => {
        
    }

    return (
        <div className={classes.root}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Gerar certificados
          </Typography>
          <List component="nav" aria-label="secondary mailbox folder">
            {state !== [] && state.map(event => {
                return (<ListItem
                    selected={selectedIndex === 2}
                    selected={selectedIndex === 2}
                    onClick={a => handleListItemClick(a, 2)}
                    >
                        <ListItemText primary={`${event.name}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments">
                                <LabelImportantIcon titleAccess="Gerar certificado" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>)
            })}
            </List>
        </div>
    )
}
