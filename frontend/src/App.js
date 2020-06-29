import React from 'react';
import { BrowserRouter as Router,  Link} from 'react-router-dom';
import {Route, Redirect, Switch} from 'react-router';
import Home from './pages/home'
import About from './pages/about'
import ExpertTips from './pages/expertTips'
import Experts from './pages/experts'
import BetOfTheDay from './pages/betOfTheDay'
import Statistics from './pages/statistics'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation'
import Container from 'react-bootstrap/Container'
import ErrorNoPage from './pages/errorNoPage'
import PremiumGuide from './components/premiumGuide'
import './App.css';
function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Container>
        <PremiumGuide />

          <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/About" component={About} />
            <Route exact path ="/ExpertTips" component={ExpertTips} />
            <Route exact path ="/Experts" component={Experts} />
            <Route exact path ="/BetOfTheDay" component={BetOfTheDay} />
            <Route exact path ="/Statistics" component={Statistics} />
            <Route exact path ="/404" component={ErrorNoPage} />
            <Redirect exact to="/404" />
          </Switch>
        </Container>
      </Router>

    </div>
  );
}

export default App;
