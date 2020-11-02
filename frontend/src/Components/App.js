import React from 'react'
import Navbar from './Navbar'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar title='ZanShare' description='out app' />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
