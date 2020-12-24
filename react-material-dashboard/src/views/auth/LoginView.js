import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = props => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState('matheusgalhani@hotmail.com');

  const handleSignIn = event => {
    event.preventDefault();
    localStorage.setItem('email_usuario_logado', email)
    navigate('/app/dashboard', { replace: true });
  }

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSignIn}>
            <Box mb={3}>
              <Typography
                color="textPrimary"
                variant="h2"
              >
                Sign in
                  </Typography>
            </Box>
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              variant="outlined"
            />
            <Box my={2}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign in now
                  </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
