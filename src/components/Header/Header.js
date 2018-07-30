import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, withStyles} from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import Logo from '../../assets/imgs/logo.svg';

const styles = theme => ({
    backButton: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        transition: 'color 100ms ease-in-out',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
});

const header = ({classes, location, onBackClick}) => (
    <AppBar position="sticky">
        <Toolbar variant="dense"
                 style={{display: 'flex', justifyContent: 'center', maxWidth: 1140, width: '100%', margin: 'auto'}}>
            {location.pathname === '/'
                ? null
                : <span area-label='Go back' className={classes.backButton} tabIndex={0} onClick={onBackClick}><ChevronLeft/>Back</span>}
            <div style={{flexGrow: 1, textAlign: 'center'}}>
                <Link to='/'
                      area-label='Go to the home page'
                      style={{
                          height: 'inherit',
                          paddingTop: 4,
                          marginLeft: location.pathname === '/'
                              ? null
                              : -56.88
                      }}>
                    <img src={Logo} alt='Character S' style={{height: 40}}/>
                </Link>
            </div>
        </Toolbar>
    </AppBar>
);

export default withStyles(styles)(header);