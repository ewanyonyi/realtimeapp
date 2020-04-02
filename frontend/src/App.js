import React from 'react'
import clsx from 'clsx'
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'

import AppBar from './components/AppBar';
import AppMenu from './components/AppMenu'
import Footer from './components/footer';

import DatatablePage from './views/List';
import cpuData from './views/Dashboard';
import SimpleForm from './views/simpleform';
import AdvancedForm from './views/advancedform';
import Todo from './views/todo';
import ChatApp from './views/chat';


const App: React.FC = () => {

  const classes = useStyles()

  return (
    <div className="App">
    <AppBar />
    <BrowserRouter>
      <div className={clsx('App', classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <AppMenu />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>

            <Switch>
              <Route path="/" exact component={cpuData} />
              <Route path="/simple" component={SimpleForm} />
              <Route path="/advanced" component={AdvancedForm} />
              <Route path="/list" component={DatatablePage} />
              <Route path="/todo" component={Todo} />
            </Switch>

          </Container>
        </main>
      </div>
    </BrowserRouter>
    <Footer />
    </div>
  )
}

const drawerWidth = 180

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: '35px',
  },
  drawerPaper: {
    position: 'sticky',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#fff',
    color: '#000000',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default App
