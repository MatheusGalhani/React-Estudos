import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  TextField,
  makeStyles,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = props => {
  const { className, submit, ...rest } = props;
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');

  const clearFields = () => {
    setDescricao('');
    setCategoria('');
  }

  const submitForm = (e) =>{
    e.preventDefault();
    const tarefa = {
      descricao: descricao,
      categoria: categoria
    }
    submit(tarefa);
    clearFields();
  }

  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        
      </Box>
      <Box mt={3}>
        <Grid container>
          <Grid item md={4} className={classes.searchInput}>
            <TextField 
              placeholder="Descrição da Tarefa"
              label="Descrição:"
              value={descricao}
              fullWidth onChange={e=> setDescricao(e.target.value)}></TextField>
          </Grid>

          <Grid item md={4} className={classes.searchInput}>
            <FormControl fullWidth>
              <InputLabel>Categoria: </InputLabel>
              <Select value={categoria} onChange={e=> setCategoria(e.target.value)}>
                <MenuItem value="">Selecione...</MenuItem>
                <MenuItem value={"TRABALHO"}>Trabalho</MenuItem>
                <MenuItem value={"ESTUDOS"}>Estudos</MenuItem>
                <MenuItem value={"OUTROS"}>Outros</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={2} className={classes.searchInput}>
            <Button variant="contained" color="secondary" onClick={submitForm}>Adicionar</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
