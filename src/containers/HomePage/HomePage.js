import React, {Fragment, Component} from 'react';

import Greeting from "../../components/Greeting/Greeting";
import PortfolioHomePage from "../../components/PortfolioHomePage/PortfolioHomePage";

class HomePage extends Component {

    pushToPortfolioPage = () => {
        this.props.history.push('/portfolio')
    };

    render() {
        return (
            <Fragment>
                <Greeting/>
                <PortfolioHomePage pushToPortfolioPage={this.pushToPortfolioPage}/>
            </Fragment>
        )
    }
}

export default HomePage;
