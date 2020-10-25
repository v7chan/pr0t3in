import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  widgetContainer: {
    height: 40,
    width: 100
  },
  button: {
    minWidth: 0,
    padding: `${theme.spacing(1)}px`
  }
}))

const QuantityWidget = ({ value, onChange }) => {
  const { widgetContainer, button } = useStyles()

  return (
    <Grid container justify="space-between" alignItems="center" className={widgetContainer}>
      <Grid item>
        <Button
          color="secondary"
          variant="outlined"
          disableElevation
          className={button}
          onClick={() => onChange(value - 1)}
          disabled={value < 1}
        >
          <RemoveIcon fontSize="inherit" />
        </Button>
      </Grid>
      <Grid item>
        <Typography display="inline" variant="subtitle1">
          {value}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          color="primary"
          variant="outlined"
          disableElevation
          className={button}
          onClick={() => onChange(value + 1)}
        >
          <AddIcon fontSize="inherit" />
        </Button>
      </Grid>
    </Grid>
  )
}

export default QuantityWidget
