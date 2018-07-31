import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, withStyles, Button} from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import Logo from '../../assets/imgs/logo.svg';
import Github from '../../assets/imgs/github.svg';

const styles = theme => ({
    backButton: {
        paddingRight: 20,
        color: theme.palette.primary.contrastText
    },
    Link: {
        height: 'inherit',
        paddingTop: 4
    }
});

const header = ({classes, location, onBackClick}) => (
    <AppBar position="sticky">
        <Toolbar variant="dense"
                 component='nav'
                 style={{display: 'flex', justifyContent: 'center', maxWidth: 1140, width: '100%', margin: 'auto'}}>
            <div style={{width: 90}}>
                {location.pathname === '/'
                    ? null
                    : <Button aria-label='Return to previous page'
                              size="small"
                              className={classes.backButton}
                              onClick={onBackClick}
                    >
                        <ChevronLeft/>Back
                    </Button>}
            </div>
            <div style={{flexGrow: 1, textAlign: 'center'}}>
                <Link to='/' aria-label='Go to the home page' className={classes.Link}>
                    <img aria-hidden="true" src={Logo} alt='Character S' style={{height: 40}}/>
                </Link>
            </div>
            <div style={{width: 90, textAlign: 'right'}}>
                <a href='https://github.com/Sakhro' target='_blank' aria-label="GitHub page" className={classes.Link}>
                    <img aria-hidden="true" src={Github} alt='Github icon' style={{height: 25}}/>
                </a>
            </div>
        </Toolbar>
    </AppBar>
);

export default withStyles(styles)(header);