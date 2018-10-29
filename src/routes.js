import React, { Fragment } from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import LazyImport from './Components/LazyImport'

const Nav = LazyImport(() => import('./Components/Nav'/* webpackChunkName: 'nav' */))

const Main = LazyImport(() => import('./Components/Main'/* webpackChunkName: 'main' */))

const Other = LazyImport(() => import('./Components/Other'/* webpackChunkName: 'other' */))

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/other" component={Other} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default Routes