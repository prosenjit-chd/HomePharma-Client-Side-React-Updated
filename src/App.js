import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Log from './components/Log/Log';
import Faq from './components/Faq/Faq';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';
import CalculatePrice from './components/CalculatePrice/CalculatePrice';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
          <BrowserRouter>
                <Header> </Header>
                    <Switch>
                      <Route exact path="/">
                          <Home> </Home>
                      </Route>
                      <Route path="/home">
                        <Home> </Home>
                      </Route>
                      <Route path="/about">
                        <About> </About>
                      </Route>
                      <Route path="/services">
                          <Services> </Services>
                      </Route>
                      <PrivateRoute path="/service/:id">
                        <ServiceDetails> </ServiceDetails>
                      </PrivateRoute>
                      <Route path="/signin">
                          <Log> </Log>
                        </Route>
                      <Route path="/faq">
                          <Faq> </Faq>
                        </Route>
                      <Route path="/registration">
                          <SignUp> </SignUp>
                        </Route>
                      <PrivateRoute path="/calculateprice">
                          <CalculatePrice> </CalculatePrice>
                        </PrivateRoute>
                        <Route path="*">
                          <NotFound> </NotFound>
                        </Route>
                    </Switch>
                <Footer> </Footer>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
