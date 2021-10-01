
import { Container } from 'react-bootstrap';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
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
                </Switch>
              </AuthProvider>
            </Router>

        
        </Container>


    </Container>
    
    
  );
}

export default App;
