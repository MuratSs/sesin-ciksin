import React from 'react'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'
import Mainpage from './pages/mainpage'


const Router = () => {
  

  return (
    
      <Routers>
        <Switch>
          <Route exact path="/" component={Mainpage} />
        </Switch>
      </Routers>
  )
}

export default Router