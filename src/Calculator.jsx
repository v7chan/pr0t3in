import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Widget from './Widget.jsx'
import GramInput from './GramInput.jsx'

const useStyles = makeStyles((theme) => ({
  title: {
    margin: `${theme.spacing(2)}px 0`
  },
  appBar: {
    top: 'auto',
    bottom: 0
  },
  input: {
    background: 'white',
    width: 75
  },
  totalInput: {
    margin: '0 auto'
  },
  divider: {
    margin: `${theme.spacing(1)}px 0`
  }
}))

const CHICKEN_SAUSAGE = 'chickenSausage'
const CHICKEN_BREAST = 'chickenBreast'
const GROUND_BEEF = 'groundBeef'

const Protein = {
  [CHICKEN_SAUSAGE]: 13,
  [CHICKEN_BREAST]: 31 / 100,
  [GROUND_BEEF]: 26 / 100,
}

const Calculator = () => {
  const { wrapper, title, appBar, input, totalInput, divider, widgetContainer } = useStyles()
  const [total, setTotal] = useState(45)
  const [sources, setSources] = useState({
    [CHICKEN_SAUSAGE]: 0,
    [CHICKEN_BREAST]: 0,
    [GROUND_BEEF]: 0
  })

  const changeChickenSausages = (value) => {
    const proteinFromChickenSausages = value * Protein[CHICKEN_SAUSAGE]

    setSources({
      [CHICKEN_SAUSAGE]: value,
      [CHICKEN_BREAST]: Math.round((total - proteinFromChickenSausages) / Protein[CHICKEN_BREAST]),
      [GROUND_BEEF]: Math.round((total - proteinFromChickenSausages) / Protein[GROUND_BEEF])
    })
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h5" align="center" className={title}>pr0t3in</Typography>
        <List>
          <ListItem>
            <ListItemText primary={`Chicken sausages (${Protein[CHICKEN_SAUSAGE]}g)`} />
            <ListItemSecondaryAction>
              <Widget value={sources[CHICKEN_SAUSAGE]} onChange={changeChickenSausages} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider className={divider} />
          <ListItem>
            <ListItemText primary={`Ground beef (${Protein[GROUND_BEEF].toFixed(2)}g)`} />
            <ListItemSecondaryAction>
              <GramInput value={sources[GROUND_BEEF]} />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Chicken breast (${Protein[CHICKEN_BREAST].toFixed(2)}g)`} />
            <ListItemSecondaryAction>
              <GramInput value={sources[CHICKEN_BREAST]} />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <AppBar position="fixed" color="primary" className={appBar}>
          <Toolbar>
            <GramInput
              className={totalInput}
              value={total}
              onChange={(event) => setTotal(event.target.value)}
            />
          </Toolbar>
        </AppBar>
      </Container>
    </>
  )
}

export default Calculator
