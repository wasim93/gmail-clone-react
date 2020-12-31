import React from 'react';
import './App.css';
import Header from './Header';
import Siderbar from './Siderbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />

        <div className='app__body'>
          <Siderbar />

          <Switch>
            <Route path='/mail' component={Mail} />
            <Route path='/' component={EmailList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
