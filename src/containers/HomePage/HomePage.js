import React, {Fragment, Component} from 'react';

import Greeting from "../../components/Greeting/Greeting";
import PortfolioHomePage from "../../components/PortfolioHomePage/PortfolioHomePage";

class HomePage extends Component {

    pushToPortfolioPage = () => {
        this.props.history.push('/portfolio')
    };

    pushToProjectPage = projectId => () => {
        this.props.history.push('/portfolio/' + projectId)
    };

    render() {
        return (
            <Fragment>
                <Greeting/>
                <PortfolioHomePage pushToPortfolioPage={this.pushToPortfolioPage} pushToProjectPage={this.pushToProjectPage}/>
            </Fragment>
        )
    }
}

export default HomePage;
