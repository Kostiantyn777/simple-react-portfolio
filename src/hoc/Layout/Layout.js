import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {createMuiTheme, CssBaseline, MuiThemeProvider} from '@material-ui/core';
import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 25,
            },
        },
        MuiPaper: {
            root: {
                transform: 'translateZ(0)',
                willChange: 'transform'
            },
        }
    },
    palette: {
        primary: {
            main: '#263238'
        },
        secondary: {
            main: '#2196F3'
        }
    },
});

class Layout extends Component {

    onBackClickHandler = () => {
        this.props.history.goBack();
    };

    render() {
        const {children, location} = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Header location={location} onBackClick={this.onBackClickHandler}/>
                <main> {/*style={{minHeight: 'calc(100vh - 162px)'}} for sticky footer*/}
                    {children}
                </main>
                {/*<Footer/>*/}
            </MuiThemeProvider>
        )
    }
}

export default withRouter(Layout);
