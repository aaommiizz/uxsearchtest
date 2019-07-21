import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Test from './pages/experimenter/test'
import RecordPage from './pages/experimenter/recordPage'
import IndexExperiment from './pages/experimenter/index'
import VideoResult from './pages/uxer/videoResult'
import ExperPage from './pages/uxer/experimenterPage'
import NotFound from './pages/error/not_found.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/sass/customAll.scss'

const Experimenter = ({ match }) => {
  return (
    <Router>
      <Switch>
        <Route exact path={`${match.path}`} component={IndexExperiment} />
        <Route exact path={`${match.path}/record`} component={RecordPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Test} />
          <Route path='/experimenter' component={Experimenter} />
          <Route exact path='/testing/VideoResult' component={VideoResult} />
          <Route exact path='/testing/ExperPage' component={ExperPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;