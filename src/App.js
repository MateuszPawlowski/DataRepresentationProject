// imports
import React from 'react';
import './App.css';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';

class App extends React.Component {
  render() {
    return (
      // browser router import
      <BrowserRouter>
        {/* div to style the page */}
        <div className="App">
          {/* navigational bar and the bar links to other pages */}
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">All Products</Nav.Link>
              <Nav.Link href="/create">Add Product</Nav.Link>
            </Nav>

          </Navbar>
          {/* switch */}
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/read" component={Read} />
            <Route path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;