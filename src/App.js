import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <Switch>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/'>
            <Home />
          </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
