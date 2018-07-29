import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar} from '@material-ui/core';
import Logo from '../../assets/imgs/logo.svg';

const header = () => (
    <AppBar position="sticky">
        <Toolbar variant="dense" style={{display: 'flex', justifyContent: 'center'}}>
            <Link to='/' style={{height: 'inherit', paddingTop: 4}}>
                <img src={Logo} alt='Character S' style={{height: 40}}/>
            </Link>
        </Toolbar>
    </AppBar>
);

export default header;