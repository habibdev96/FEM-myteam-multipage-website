import Globals from './abstracts/Globals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/shared/Navbar';
import Cta from './components/shared/Cta';
import Footer from './components/shared/Footer';

const App = () => {
  return (
    <>
      <Globals />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Contact' component={Contact} />
        </Switch>
        <Cta />
        <Footer />
      </Router>
    </>
  );
};

export default App;
