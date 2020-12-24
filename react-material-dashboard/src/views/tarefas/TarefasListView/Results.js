import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import TimerIcon from '@material-ui/icons/Timer';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  IconButton
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = props => {
  const { className, tarefas, update, deleteTarefa, ...rest } = props;
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                tarefas.map(tarefa => {
                  return (
                    <TableRow key={tarefa.id}>
                      <TableCell>{tarefa.id}</TableCell>
                      <TableCell>{tarefa.descricao}</TableCell>
                      <TableCell>{tarefa.categoria}</TableCell>
                      <TableCell>
                        <IconButton aria-label="status" color='secondary' onClick={e => update(tarefa.id)}>
                          {tarefa.done ? <DoneAllIcon /> : <TimerIcon />}
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <IconButton aria-label="delete" onClick={e => deleteTarefa(tarefa.id)}>
                          <DeleteOutlineIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  tarefas: PropTypes.array.isRequired
};

export default Results;
