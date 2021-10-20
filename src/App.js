import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';

import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Footer from './Pages/Home/Footer/Footer';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Department1 from './Department/Department1';
import Department2 from './Department/Department2';
import Department3 from './Department/Department3';
import Department4 from './Department/Department4';
import Department5 from './Department/Department5';
import Department6 from './Department/Department6';
import ContactUs from './Pages/ContactUs/ContactUs';
import Appointment from './Pages/Appointment/Appointment';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/details/1">
              <Department1></Department1>
            </PrivateRoute>
            <PrivateRoute exact path="/details/2">
              <Department2></Department2>
            </PrivateRoute>
            <PrivateRoute exact path="/details/3">
              <Department3></Department3>
            </PrivateRoute>
            <PrivateRoute exact path="/details/4">
              <Department4></Department4>
            </PrivateRoute>
            <PrivateRoute exact path="/details/5">
              <Department5></Department5>
            </PrivateRoute>
            <PrivateRoute exact path="/details/6">
              <Department6></Department6>
            </PrivateRoute>
            <PrivateRoute exact path="/contactus">
              <ContactUs></ContactUs>
            </PrivateRoute>
            <PrivateRoute exact path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
