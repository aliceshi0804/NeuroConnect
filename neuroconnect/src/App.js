
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
import Onboarding from './Onboarding'
import ForgotPassword from './ForgotPassword';
import ForgotPass2Verify from './ForgotPass2Verify';
import ForgotPass3Reset from './ForgotPass3Reset';
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
                  <Route exact path="/signup" component={Signup}/>
                  <Route exact path="/login" component ={Login}/>
                  <Route exact path="/learn" component ={Learn}/>
                  <Route exact path="/connect" component ={Connect}/>
                  <Route exact path="/resources" component ={Resources}/>
                  <Route exact path="/chat" component ={Chat}/>
                  <Route exact path="/profile" component ={Profile}/>
                  <Route exact path="/forgotPassword" component ={ForgotPassword}/>
                  <Route exact path = "/forgotPasswordVerify" component = {ForgotPass2Verify}/>
                  <Route exact path = "/forgotPasswordReset" component = {ForgotPass3Reset}/>
                  <Route path="/module/:title/:numCourse" component={ModulePage}/>
                  
                  {/* <Route path="/module" component={ModulePage}/> */}
                  <Route path="/onboarding" component={Onboarding}/>
                </Switch>
              </AuthProvider>
            </Router>

        
        </Container>


    </Container>
    
    
  );
}

export default App;
