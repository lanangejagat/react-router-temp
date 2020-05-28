import React, { Fragment } from 'react';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';



import '../App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(5),
    },
  },
}));


export default function Search() {
  const classes = useStyles();

  return (
      <Fragment>

    <FormControl>
        <InputLabel color='secondary' variant='filled' htmlFor="my-input"></InputLabel>
        <Input  placeholder="Search City.." inputProps={{ 'aria-label': 'description' }} type='text' />
        <FormHelperText id="my-helper-text">Input the correct city!</FormHelperText>
        <Button
        type="button"
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<SearchIcon />}
      >
        Get Weather
      </Button>
    </FormControl>
    {/* // <form className={classes.root} noValidate autoComplete="off">
    //   <Input  placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} type='text' />
    // </form> */}
    </Fragment>
  );
 
}
  
