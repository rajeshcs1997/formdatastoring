import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const userdata1 = JSON.parse(localStorage.getItem('users')) || [];
    setUserdata(userdata1)
  }, []);
  console.log("fotmasjdgds",userdata)
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Father Name</TableCell>
              <TableCell align="right">Mother Name</TableCell>
              <TableCell align="right">E-mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userdata?.map((value) => (
              <TableRow key={value.name}>
                <TableCell component="th" scope="row">
                  {value.name}
                </TableCell>
                <TableCell align="right">{value.fatherName}</TableCell>
                <TableCell align="right">{value.motherName}</TableCell>
                <TableCell align="right">{value.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}