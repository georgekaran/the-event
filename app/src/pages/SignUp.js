import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputLabel from '@material-ui/core/InputLabel';
import 'date-fns';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useForm, { FormContext } from "react-hook-form"
import TextFieldRegister from '../components/input/TextFieldRegister';
import * as yup from "yup";
import Api from '../util/Api'
import SelectRegister from '../components/select/SelectRegister';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import CustomizedSnackbars from '../components/snackbar/CustomSnackBar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="cent#er">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}17/11/2019
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Não é um email valido").required("Campo obrigatório"),
    password: yup.string().required('Campo obrigatório'),
    passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Senha não conferem'),
    address: yup.string().required('Campo obrigatório'),
  });

export default function SignUp() {
  const [stateGender, setStateGender] = useState({ gender: "M" });
  const [stateDate, setStateDate] = useState({ date_birth: new Date() });
  const [stateSnackbar, setStateSnackbar] = useState({ open: false, message: '', type: 'success' });

  const methods = useForm({
    validationSchema: SignUpSchema
  });

  const onSubmit = async (data) => {
    const mergeData = Object.assign(data, stateGender, stateDate);
    delete mergeData.passwordConfirmation
    const resp = await Api.user.create(mergeData);
    console.log(resp);
    setStateSnackbar({ open: true, message: 'Usuário cadastrado com sucesso', type: 'success' });
  }
  
  const handleGenderChange = (e) => {
    setStateGender({ gender: e.target.value })
  }

  const handleDateChange = date => {
    setStateDate({ date_birth: date });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <FormContext {...methods} >
        <form className={classes.form} onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextFieldRegister
                autoComplete="name"
                name="name"
                variant="outlined"
                label="Nome"
                fullWidth
                id="name"
                labelstateDateocus
                error={!!methods.errors["name"]}
                helperText={methods.errors["name"] ? methods.errors["name"].message : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldRegister
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                error={!!methods.errors["email"]}
                helperText={methods.errors["email"] ? methods.errors["email"].message : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldRegister
                variant="outlined"
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                error={!!methods.errors["password"]}
                helperText={methods.errors["password"] ? methods.errors["password"].message : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldRegister
                variant="outlined"
                fullWidth
                name="passwordConfirmation"
                label="Confirme sua senha"
                type="password"
                id="passwordConfirmation"
                autoComplete="current-password"
                error={!!methods.errors["passwordConfirmation"]}
                helperText={methods.errors["passwordConfirmation"] ? methods.errors["passwordConfirmation"].message : ""}
              />
            </Grid>
            <Grid item xs={12}>
            <InputLabel id="gender-label">Sexo</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              fullWidth
              name="gender"
              variant="outlined"
              value={stateGender.gender}
              onChange={handleGenderChange}>
                <MenuItem value={'M'}>Masculino</MenuItem>
                <MenuItem value={'F'}>Feminino</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    fullWidth
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={stateDate.date_birth}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <TextFieldRegister
                variant="outlined"
                fullWidth
                name="address"
                label="Endereço"
                type="address"
                id="address"
                autoComplete="address"
                error={!!methods.errors["address"]}
                helperText={methods.errors["address"] ? methods.errors["address"].message : ""}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Já possui uma conta? Logue-se aqui
              </Link>
            </Grid>
          </Grid>
        </form>
        </FormContext>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      <CustomizedSnackbars message={stateSnackbar.message}
                           type={stateSnackbar.type}
                           open={stateSnackbar.open} />
    </Container>
  );
}