import React from 'react'
import {  BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import AddListing from './components/AddListing'
import EditListing from './components/EditListing'
import ProductShowPage from './components/ProductShowPage'
import Home from '.components/Home'
import Login from '.component/Login'
import SignUp from '.components/SignUp'
import ProductsContainer from '.components/ProductsContainer'

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <header className='App-header'>
          <div className='navbar'>
            <Navbar />
          </div>
        </header>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/profile" component={Profile} />
              <Route path="/editprofile" component={EditProfile} />
              <Route exact path="/products" component={ProductsContainer} />
              <Route path="/products/:id" component={ProductShowPage} />
              <Route path="/profile/addlisting" component={AddListing} />
              <Route path="/profile/editlisting/:id" component={EditListing} />
              <Route path="/profile/editprofile" component={EditProfile} />
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
