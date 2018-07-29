import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'
import asyncComponent from './hoc/asyncComponent/asyncComponent'
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage'

const asyncPortfolio = asyncComponent(() => import('./containers/PortfolioPage/PortfolioPage'));

class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route path='/portfolio/development' component={asyncPortfolio}/>
                <Route path='/portfolio/design' component={asyncPortfolio}/>
                <Route path='/portfolio/:projectId' component={asyncPortfolio}/>
                <Route path='/portfolio' exact component={asyncPortfolio}/>
                <Route path='/' exact component={HomePage}/>
                <Redirect to='/'/>
            </Switch>
        </Layout>
    )
  }
}

export default App;
