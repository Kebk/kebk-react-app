import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Home from '@/pages/Home/Home'
import Page1 from '@/pages/Page1/Page1'
import Counter from '@/pages/Counter/Counter'

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
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/counter" component={Counter} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default getRouter
