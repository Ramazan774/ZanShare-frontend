import React from 'react'
import {  BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import EditProfile from '../components/EditProfile'
import Listing from '../components/Listing'
import Listings from '../components/Listings'
import AddListing from '../components/AddListing'
import EditListing from '../components/EditListing'
import ProductShowPage from '../components/ProductShowPage'
import ProductsContainer from '../components/ProductsContainer'

class App extends React.Component {
  render(){
    return(
      <div className="App">
          <Navbar />
          <BrowserRouter>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/editprofile/:id" component={EditProfile} />
              <Route exact path="/products" component={ProductsContainer} />
              <Route path="/products/:id" component={ProductShowPage} />
              <Route path="/listings" component={Listings} />
              <Route path="/profile/addlisting" component={AddListing} />
              <Route path="/profile/editlisting/:id" component={EditListing} />
              <Route path="/profile/editprofile" component={EditProfile} />
              <Route exact path="/" component={Login} />
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
