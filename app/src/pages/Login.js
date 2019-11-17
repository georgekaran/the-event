import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ContextEnhancer from '../ContextEnhancer';
import useForm, { FormContext } from "react-hook-form"
import TextFieldRegister from '../components/input/TextFieldRegister';
import Api from '../util/Api';
import CustomizedSnackbars from '../components/snackbar/CustomSnackBar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = ({ message, ...props }) => {
  const [stateSnackbar, setStateSnackbar] = useState({ open: false, message: '', type: 'success' });
  const methods = useForm();

  const onSubmit = async data => { 
    console.log(data)
    const resp = await Api.auth.login(data);
    if (resp.status === 200) {
      sessionStorage.setItem('user', JSON.stringify(resp.data.user))
      window.location.reload()
    } else {
      setStateSnackbar({ open: true, message: 'Email ou senha incorretos', type: 'error' });
    }
    console.log("AAAAAAAAAAAAAaa", await Api.auth.login(data));
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Login
        </Typography>
        <FormContext {...methods} >
            <form className={classes.form} onSubmit={methods.handleSubmit(onSubmit)}>
            <TextFieldRegister
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={message["label_login"]}
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextFieldRegister
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label={message["label_password"]}
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={message["label_remeber_me"]}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                {message["label_signin"]}
            </Button>
            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2">
                    {message["label_forgot_password"]}
                </Link>
                </Grid>
                <Grid item>
                <Link href="/signup" variant="body2">
                    {message["label_dont_have_account"]}
                </Link>
                </Grid>
            </Grid>
            </form>
        </FormContext>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <CustomizedSnackbars message={stateSnackbar.message}
                           type={stateSnackbar.type}
                           open={stateSnackbar.open} />
    </Container>
  );
}

export default ContextEnhancer(SignIn);