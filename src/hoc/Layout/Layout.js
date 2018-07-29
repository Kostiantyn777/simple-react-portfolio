import React, {Component} from 'react';
import {createMuiTheme, CssBaseline, MuiThemeProvider} from '@material-ui/core';
import Header from "../../components/Header/Header";

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
    render() {
        const {children} = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>
                <main>
                    {children}
                </main>
            </MuiThemeProvider>
        )
    }
}

export default Layout;
