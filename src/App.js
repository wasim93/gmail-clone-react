import React from 'react';
import './App.css';
import Header from './Header';
import Siderbar from './Siderbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../src/features/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  console.log(sendMessageIsOpen);
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
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
