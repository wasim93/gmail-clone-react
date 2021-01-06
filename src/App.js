import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Siderbar from './Siderbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../src/features/mailSlice';
import { selectUser } from '../src/features/userSlice';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login } from './features/userSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
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
      )}
    </Router>
  );
}

export default App;
