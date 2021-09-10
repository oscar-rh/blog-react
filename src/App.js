import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {  
  Nav, 
  NavItem,
  Navbar,
  Container,
  Row

} from "reactstrap"

import logo from './logo.svg';
import './App.scss';

import CreatePost from './Pages/CreatePost'
import DetailPost  from './Pages/DetailPost'
import Posts  from './Pages/Posts'




function App() {
  return (

          <Router>
                <div>

                <Navbar color="info" info expand="md">                  
                      <Nav className="mr-auto" navbar>
                        <NavItem>
                              <Link to="/" className="nav-link text-white ">Home                          
                              </Link>
                          </NavItem>                        
                          <NavItem>
                              <Link to="/create-post" className="nav-link text-white" >Crear Post</Link>
                          </NavItem>
                      </Nav>
                </Navbar>


                  {/* A <Switch> looks through its children <Route>s and
                      renders the first one that matches the current URL. */}
                <Container>
                    <Row>        
                      <Switch>
                        <Route path="/create-post">
                            <CreatePost/>                          
                        </Route>
                        <Route path="/detail-post/:id">
                            <DetailPost/>
                        </Route>
                        <Route path="/">
                            <Posts/>
                        </Route>
                      </Switch>
                    </Row> 
                </Container>
                  
                </div>
              </Router>


  );
}

export default App;
