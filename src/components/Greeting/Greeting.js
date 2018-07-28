import * as React from 'react';

import {createStyles, Grid, Typography, withStyles} from "@material-ui/core";
import Avatar from '../../assets/imgs/avatar.jpg';


const styles = createStyles({
    greetingTextContainer: {
        height: '100vh',
        position: 'absolute',
        top: 0
    }
});

const greeting = ({classes}) => (
    <section>
        <img src={Avatar}/>
        <Grid container alignItems='center' className={classes.greetingTextContainer}>
            <Grid item xs={false} sm={6}/>
            <Grid item xs={12} sm={6}>
                <Typography variant='headline' component='p'>Hello, how are you?</Typography>
                <Typography variant='display2'>My name is Sava Sakhro</Typography>
                <Typography variant='headline' component='p'>
                    I like helping people solve their problems through design, web development and everything in between
                </Typography>
            </Grid>
        </Grid>
    </section>
);


export default withStyles(styles)(greeting);
