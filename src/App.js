import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/Navs';
import About from './components/About';
import Temp from './components/Temp';
import Login from './components/Login';
import Landing from './components/Landing';
import Search from './components/Search';

import SimpleBottomNavigation from './components/Bottomnav';




function App() {
 
  return (
    <Router>

      <div className="App">
        <Nav />
        {/* <Search /> */}

          <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/about" exact component={About}/>
            <Route path="/temp" exact component={Temp}/>
            <Route path="/login" exact component={Login}/>
            
          </Switch>
          <SimpleBottomNavigation />
        
      </div>
    </Router>

  );
}

const Home = () => (
  <div>
    <h1>home page</h1>
  </div>
);

export default App;
