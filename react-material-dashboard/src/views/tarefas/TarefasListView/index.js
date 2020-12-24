import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const TarefasListView = () => {
  const classes = useStyles();
  const [tarefas, setTarefas] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [mensagem, setMensagem] = useState('')
  const API_URL = 'https://minhastarefas-api.herokuapp.com/tarefas';
  const headers = {
    "Accept": "*/*",
    "x-tenant-id": localStorage.getItem('email_usuario_logado')
  };

  const submit = (tarefa) => {
    axios.post(API_URL, tarefa, {
      headers: headers
    }).then(response => {
      const novaTarefa = response.data;
      setTarefas([...tarefas, novaTarefa]);      
      setMensagem('Item adicionado com sucesso!');
      setOpenDialog(true);
    }).catch(error => {
      setMensagem(error);
      setOpenDialog(true);
    })
  }

  const update = (id) => {
    axios.patch(`${API_URL}/${id}`, null, {
      headers: headers
    }).then(response => {
      const listaTarefas = [...tarefas];
      listaTarefas.forEach(tarefa => {
        if(tarefa.id === id) tarefa.done = true;
      });
      setTarefas(listaTarefas);           
      setMensagem('Item atualizado com sucesso!');
      setOpenDialog(true);
    }).catch(error => {
      setMensagem(error);
      setOpenDialog(true);
    })
  }

  const deleteTarefa = (id) => {
    axios.delete(`${API_URL}/${id}`, {
      headers: headers
    }).then(response => {
      const listaTarefas = tarefas.filter(tarefa => tarefa.id !== id)
      setTarefas(listaTarefas);           
      setMensagem('Item deletado com sucesso!');
      setOpenDialog(true);
    }).catch(error => {
      setMensagem(error);
      setOpenDialog(true);
    })
  }

  const getTarefas = () => {
    axios.get(API_URL, {
      headers: headers
    }).then(response => {
      const listTarefas = response.data;
      setTarefas(listTarefas);
    }).catch(error => {
      setMensagem(error);
      setOpenDialog(true);
    })
  }

  useEffect(() => {
    getTarefas();
  }, [])

  return (
    <Page
      className={classes.root}
      title="Tarefas">
      <Container maxWidth={false}>
        <Toolbar submit={submit}/>
        <Box mt={3}>
          <Results tarefas={tarefas} update={update} deleteTarefa={deleteTarefa}/>
        </Box>
      </Container>
      <Dialog open={openDialog} onClose={e => setOpenDialog(false)}>
        <DialogTitle>Atenção</DialogTitle>
        <DialogContent>{mensagem}</DialogContent>
        <DialogActions><Button onClick={e => setOpenDialog(false)}>Fechar</Button></DialogActions>
      </Dialog>
    </Page>
  );
};

export default TarefasListView;
