import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Buscador from "./Buscador";
import TableActionsCell from "./TableActionsCell";
import TableHeader from "./TableHeader";

export default function TableComponent(props) {
  const [rows, setRows] = useState(props?.rows || []);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const combrobarConcurrencia = (argumento) => {
    if (argumento && argumento !== "") {
      const rows_ = props.rows
        .map((fila) => {
          let tx = "";
          Object.keys(fila).forEach((id) => {
            tx += !Array.isArray(fila[id]) ? ` ${fila[id]}` : "";
          });
          return tx.includes(argumento) ? fila : null;
        })
        .filter(Boolean);
      setRows(rows_);
    } else {
      setRows(props.rows);
    }
  };

  const propsBuscador = {
    onClick: (argumento) => {
      combrobarConcurrencia(argumento);
    },
    propsBasicSelect: props.propsBasicSelect,
  };

  useEffect(() => {
    setRows(props.rows);
  }, [props?.rows]);

  return (
    <Grid item xs={12} style={{ margin: 24 }}>
      <Grid container>
        <Grid item xs={12}>
          <Buscador {...propsBuscador} />
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ width: "100%", overflow: "hidden" }}>
            <TableHeader {...props} />
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {props.columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {props.columns.map((column) => {
                            const value = row[column.id];
                            return !Array.isArray(value) ? (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            ) : (
                              <TableActionsCell
                                cell={value}
                                column={column}
                                current={{row, index}}
                              />
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
