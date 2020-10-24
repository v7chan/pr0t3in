import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  widgetContainer: {
    height: 40,
    width: 75
  }
})

const Widget = ({ value, onChange }) => {
  const { widgetContainer } = useStyles()

  return (
    <Grid container justify="space-between" alignItems="center" className={widgetContainer}>
      <Grid item>
        <IconButton
          size="small"
          color="secondary"
          onClick={() => onChange(value - 1)}
        >
          <RemoveCircleOutlineOutlinedIcon fontSize="inherit" />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography display="inline" variant="subtitle1">
          {value}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton
          size="small"
          color="primary"
          onClick={() => onChange(value + 1)}
        >
          <AddCircleOutlineOutlinedIcon fontSize="inherit" />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Widget
