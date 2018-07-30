import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'
import asyncComponent from './hoc/asyncComponent/asyncComponent'
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage'

const asyncPortfolioPage = asyncComponent(() => import('./containers/PortfolioPage/PortfolioPage'));
const asyncProjectPage = asyncComponent(() => import('./containers/ProjectPage/ProjectPage'));

class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route path='/portfolio/development' component={asyncPortfolioPage}/>
                <Route path='/portfolio/design' component={asyncPortfolioPage}/>
                <Route path='/portfolio/latest' render={() => <Redirect to='/portfolio'/>}/> {/*Fix old website route*/}
                <Route path='/portfolio/:projectId' component={asyncProjectPage}/>
                <Route path='/portfolio' exact component={asyncPortfolioPage}/>
                <Route path='/' exact component={HomePage}/>
                <Redirect to='/'/>
            </Switch>
        </Layout>
    )
  }
}

export default App;
