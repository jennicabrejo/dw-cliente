import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Table from "../../General/TableComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  postNotasXLSX,
  reDon,
  getNotasCurso,
  deleteNotasCurso,
} from "../../../Redux/actions/notas.actions";
import Modal from "../../General/Modal";
import EditarNotas from "./EditarNotas";
import EliminarNota from "./EliminarNota";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const columns = [
  { id: "estudiante_carnet", label: "Carnet Alumno", minWidth: 150 },
  { id: "estudiante_nota", label: "Nota", minWidth: 150 },
  { id: "codigo_curso", label: "Codigo Curso", minWidth: 150 },
  { id: "actions", label: "Acciones", minWidth: 150 },
];

const Notas = (props) => {
  // Styles
  const classes = useStyles();
  // Redux
  const dispatch = useDispatch();
  // Reducer de notas
  const done = useSelector(({ reducerNotas }) => reducerNotas.done);
  const notasCurso = useSelector(({ reducerNotas }) => reducerNotas.notasCurso);

  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEl, setOpenEl] = useState(false);
  const [cur, setCurrent] = useState({ index: "" });

  useEffect(() => {
    if (done) {
      setRows([]);
      setTimeout(() => {
        dispatch(reDon());
      }, 8000);
    }
    //eslint-disable-next-line
  }, [done]);

  useEffect(() => {
    if (notasCurso) {
      setRows(notasCurso);
    }
    //eslint-disable-next-line
  }, [notasCurso]);

  const sendJSON = () => {
    if (rows.length) {
      dispatch(postNotasXLSX(rows));
    }
  };

  const actions = [
    {
      id: "editar",
      type: "IconButton",
      icon: "ModeEditIcon",
      tip: "Editar",
      onClick: (current) => {
        console.log(current.current);
        setOpen(true);
        setCurrent(current.current);
      },
      propsIButton: {
        style: { padding: 4 },
      },
      propsIcon: {
        style: { color: "orange" },
      },
    },
    {
      id: "eliminar",
      type: "IconButton",
      icon: "DeleteIcon",
      tip: "Eliminar",
      onClick: (current) => {
        setCurrent(current.current);
        if (!current.current.row._id) {
          let aux = rows.filter((r, index) => index !== current.current.index);
          setRows(aux);
        } else {
          setOpenEl(true);
        }
      },
      propsIButton: {
        style: { padding: 4 },
      },
      propsIcon: {
        style: { color: "brown" },
      },
    },
  ];

  const propsTable = {
    rows: rows.map((r) => {
      return { ...r, actions };
    }),
    columns,
    title: "Notas cargadas",
    upload: true,
    send: true,
    setRows: setRows,
    sendAction: sendJSON,
    propsBasicSelect: {
      items: props.cursos.map((curso) => {
        return {
          text: curso.Curso_nombre,
          value: curso._id,
        };
      }),
      currentSelect: (current) => {
        //
        dispatch(getNotasCurso({ id_curso: current.value }));
      },
      resetValue: done
    },
  };

  const controlersModal = {
    open,
    setOpen,
    confirmClick: (e) => {
      let aux = rows.map((r, index) => {
        if (index === cur?.index) {
          return e;
        }
        return r;
      });
      setRows(aux);
    },
  };

  const controlersModalEliminar = {
    open: openEl,
    setOpen: setOpenEl,
    confirmClick: (e) => {
      dispatch(deleteNotasCurso({ id: e.row._id }));
      let aux = rows.filter((r, index) => index !== e.index);
      setRows(aux);
    },
  };

  return (
    <Grid container>
      <Grid item xs={12} style={{ marginTop: 24, marginLeft: 24 }}>
        <Typography variant="h3" gutterBottom component="div">
          Notas
        </Typography>
      </Grid>
      <Table {...propsTable} />
      {done && <Alert severity="info">Registro exitoso!</Alert>}
      <Modal
        {...controlersModal}
        content={<EditarNotas {...controlersModal} current={cur} />}
        boxProps={{
          className: classes.center,
        }}
      />
      <Modal
        {...controlersModalEliminar}
        content={<EliminarNota {...controlersModalEliminar} current={cur} />}
        boxProps={{
          className: classes.center,
        }}
      />
    </Grid>
  );
};

export default Notas;
