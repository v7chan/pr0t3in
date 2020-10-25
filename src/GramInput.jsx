import React from 'react';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inputContainer: {
    background: 'white',
    width: 100
  },
  input: {
    '&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
  }
})

const GramInput = ({ value, onChange, className }) => {
  const { inputContainer, input } = useStyles()

  return (
    <OutlinedInput
      className={clsx(inputContainer, className)}
      margin="dense"
      value={value}
      onChange={onChange}
      endAdornment={<InputAdornment position="end">g</InputAdornment>}
      labelWidth={0}
      inputProps={{
        type: 'number',
        pattern: '[0-9]*',
        inputMode: 'numeric',
        className: input
      }}
    />
  )
}

export default GramInput
