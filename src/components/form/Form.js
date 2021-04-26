import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button, FormHelperText} from '@material-ui/core';
import './Form.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',
    },
  },
}));

export default function Form() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmited,setIsSubmited] = useState(false);
  const [userdata, setUserdata] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsSubmited(true)
    let fdata = {name:name, fatherName:fatherName, motherName:motherName,email:email}
    let data=userdata;
    data.push(fdata);
    setUserdata(data);
    localStorage.setItem('users', JSON.stringify(userdata));
    setName("");
    setFatherName("");
    setMotherName("");
    setEmail("");
  }
  useEffect(() => {
    const userdata1 = JSON.parse(localStorage.getItem('users')) || [];
    setUserdata(userdata1)
  }, []);
  
  return (
    <>
      <h1>Fill the following filed</h1>
      <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <TextField
      id="standard-basic"
      label="Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      {isSubmited && name=="" && <FormHelperText error={true} className={classes.errorMessage}>
        Please enter name
      </FormHelperText>}

      <TextField
      id="standard-basic"
      label="Father Name"
      value={fatherName}
      onChange={(e)=>setFatherName(e.target.value)}
      />
      {isSubmited && fatherName=="" && <FormHelperText error={true} className={classes.errorMessage}>
        Please enter father name
      </FormHelperText>}

      <TextField
      id="standard-basic"
      label="Mother Name"
      value={motherName}
      onChange={(e)=>setMotherName(e.target.value)}
      />
      {isSubmited && motherName=="" && <FormHelperText error={true} className={classes.errorMessage}>
        Please enter mother
      </FormHelperText>}

      <TextField
      id="standard-basic"
      label="E-mail"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      /><br/><br/>
      {isSubmited && email=="" && <FormHelperText error={true} className={classes.errorMessage}>
        Please enter email
      </FormHelperText>}

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </>
  );
}
