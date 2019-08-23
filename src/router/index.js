import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Bundle from './bundle'

import Loading from '@/pages/Loading/'
import Home from 'bundle-loader?lazy&name=home!@/pages/Home/Home'
import Page1 from 'bundle-loader?lazy&name=page1!@/pages/Page1/Page1'
import Counter from 'bundle-loader?lazy&name=counter!@/pages/Counter/Counter'
import UserInfo from 'bundle-loader?lazy&name=userInfo!@/pages/User/UserInfo'

const createComponent = component => props => (
  <Bundle load={component}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </Bundle>
)

const getRouter = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/page1">Page1</Link>
        </li>
        <li>
          <Link to="/counter">counter</Link>
        </li>
        <li>
          <Link to="/userInfo">UserInfo</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={createComponent(Home)} />
        <Route exact path="/page1" component={createComponent(Page1)} />
        <Route exact path="/counter" component={createComponent(Counter)} />
        <Route exact path="/userInfo" component={createComponent(UserInfo)} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default getRouter
