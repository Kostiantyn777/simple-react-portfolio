import React from 'react';
import {Grid, Typography, withStyles} from '@material-ui/core';
import Phone from '@material-ui/icons/Phone'
import MailOutline from '@material-ui/icons/MailOutline'

const styles = theme => ({
    root: {
        height: 80,
        backgroundColor: theme.palette.primary.main
    },
    link: {
        color:  theme.palette.primary.contrastText,
        display: 'flex',
        textDecoration: 'none',
        alignItems: 'center'
    }
});

const footer = ({classes}) => (
    <Grid container component='footer' className={classes.root} alignItems='center' justify='center'>
        <Grid item xs={12} sm={6}/>
        <Grid item xs={12} sm={6}>
            <Typography variant='body2'>
                <a href="mailto:sd.sakhro@gmail.com" className={classes.link}><MailOutline/> sd.sakhro@gmail.com</a>
            </Typography>
            <Typography variant='body2'>
                <a href="tel:+48791723053" className={classes.link}> <Phone/> +48 791 723 053</a>
            </Typography>
        </Grid>
    </Grid>
);

export default withStyles(styles)(footer);