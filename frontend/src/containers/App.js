import React from 'react'
import {  BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import EditProfile from '../components/EditProfile'
import Listing from '../components/Listing'
import Listings from '../components/Listings'
import AddProduct from '../components/AddProduct'
import EditProduct from '../components/EditProduct'
import ProductShowCard from '../components/ProductShowCard'
import ProductsContainer from '../components/ProductsContainer'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/editprofile/:id" component={EditProfile} />
            <Route exact path="/products" component={ProductsContainer} />
            <Route exact path="/products/:id" component={ProductShowCard} />
            <Route exact path="/listing" component={Listing} />
            <Route exact path="/listings" component={Listings} />
            <Route exact path="/addproduct" component={AddProduct} />
            <Route exact path="/editproduct/:id" component={EditProduct} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
