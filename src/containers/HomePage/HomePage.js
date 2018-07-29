import React, {Fragment, Component} from 'react';

import Greeting from "../../components/Greeting/Greeting";
import Portfolio from "../../components/Portfolio/Portfolio";

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
                <Portfolio pushToPortfolioPage={this.pushToPortfolioPage} pushToProjectPage={this.pushToProjectPage}/>
            </Fragment>
        )
    }
}

export default HomePage;
