
import { Container } from 'react-bootstrap';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Learn from './Learn';
import Connect from './Connect';
import Resources from './Resources';
import Chat from './Chat';
import ModulePage from './ModulePage'
import Profile from './Profile'
import ForgotPassword from './ForgotPassword';
import { AuthProvider } from './contexts/AuthContext';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Container>
        <Container className=" alight-items-center justify-content-center"
        style={{minHeight: "100vh"}}>
            <Router>
              <AuthProvider>
                <Switch>
                  <Route exact path="/" component ={Home}/>
                  <Route path="/signup" component={Signup}/>
                  <Route path="/login" component ={Login}/>
                  <Route path="/learn" component ={Learn}/>
                  <Route path="/connect" component ={Connect}/>
                  <Route path="/resources" component ={Resources}/>
                  <Route path="/chat" component ={Chat}/>
                  <Route path="/profile" component ={Profile}/>
                  <Route path="/forgotPassword" component ={ForgotPassword}/>
                  <Route path="/module" component={ModulePage}/>
                </Switch>
              </AuthProvider>
            </Router>

        
        </Container>


    </Container>
    
    
  );
}

export default App;
