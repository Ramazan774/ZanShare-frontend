import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Profile from './Components/Profile'
import ProductsContainer from './Components/ProductsContainer'
import ProductShowPage from './Components/ProductShowPage'
import AddListing from './Components/AddListing'
import EditListing from './Components/EditListing'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="ZanShare" description="out app" />
        <Switch>
          <Route path="/navbar" component={Navbar} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/products" component={ProductsContainer} />
          <Route path="/products/:id" component={ProductShowPage} />
          <Route path="/AddListing" component={AddListing} />
          <Route path="/editlisting/:id" component={EditListing} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
