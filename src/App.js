import Globals from './abstracts/Globals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Globals />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
