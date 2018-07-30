import * as React from 'react';
import {Link} from 'react-router-dom';
import {createStyles, Grid, Typography, withStyles} from "@material-ui/core";
import avatar1x from '../../assets/imgs/avatar_1x.jpg';
import avatar2x from '../../assets/imgs/avatar_2x.jpg';

const styles = createStyles({
    root: {
        maxHeight: 600,
        overflow: 'hidden'
    },
    textContainer: {
        height: 600,
        position: 'absolute',
        top: 0,
        '@media only screen and (max-width: 960px)': {
            height: 450
        },
        '@media only screen and (max-width: 750px)': {
            height: 400
        },
        '@media only screen and (max-width: 600px)': {
            position: 'initial',
            padding: 16
        }
    },
    avatar: {
        width: '100%',
        '@media only screen and (max-width: 600px)': {
            display: 'none'
        }
    }
});

const greeting = ({classes}) => (
    <section className={classes.root}>
        <img src={avatar2x}
             className={classes.avatar}
             srcSet={`${avatar1x} 1280w, ${avatar2x} 4160w`}
             sizes='100vw'
             alt='Smiling Sava Sakhro'
        />
        <Grid container alignItems='center' className={classes.textContainer}>
            <Grid item xs={false} sm={6}/>
            <Grid item xs={12} sm={6} style={{paddingRight: 20}}>
                <Typography variant='headline' component='p'>Hello, how are you?</Typography>
                <Typography variant='display2'>My name is Sava Sakhro</Typography>
                <Typography variant='headline' component='p'>
                    I like helping people solve their problems
                    through <Link className='link'
                                  to='/portfolio/design'>design</Link>, <Link className='link'
                                                                              to='/portfolio/development'>web
                    development</Link> and
                    everything <Link className='link' to='/portfolio'>in between</Link>
                </Typography>
            </Grid>
        </Grid>
    </section>
);


export default withStyles(styles)(greeting);
