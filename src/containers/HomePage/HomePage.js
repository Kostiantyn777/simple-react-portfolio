import React, {Fragment, Component} from 'react';

import Greeting from "../../components/Greeting/Greeting";
import PortfolioHomePage from "../../components/PortfolioHomePage/PortfolioHomePage";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Greeting/>
                <PortfolioHomePage/>
            </Fragment>
        )
    }
}

export default HomePage;
