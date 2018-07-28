import * as React from 'react';
import {Link} from 'react-router-dom';
import {createStyles, Grid, Typography, withStyles} from "@material-ui/core";
import avatar from '../../assets/imgs/avatar.jpg';
import placeholder from '../../assets/imgs/placeholder.jpg';
import {LazyLoadImage} from 'react-lazy-load-image-component';

const styles = createStyles({
    greetingTextContainer: {
        height: '100vh',
        position: 'absolute',
        top: 0
    }
});

const greeting = ({classes}) => (
    <section>
        <LazyLoadImage src={avatar} alt='Photo of smiling Sava Sakhro' placeholderSrc={placeholder}/>
        <Grid container alignItems='center' className={classes.greetingTextContainer}>
            <Grid item xs={false} sm={6}/>
            <Grid item xs={12} sm={6} style={{paddingRight: 20}}>
                <Typography variant='headline' component='p'>Hello, how are you?</Typography>
                <Typography variant='display2'>My name is Sava Sakhro</Typography>
                <Typography variant='headline' component='p'>
                    I like helping people solve their problems
                    through <Link className='link' to='/portfolio/design'>design</Link>, <Link className='link'
                                                                                               to='/portfolio/web_development'>web
                    development</Link> and
                    everything <Link className='link' to='/portfolio/other'>in between</Link>
                </Typography>
            </Grid>
        </Grid>
    </section>
);


export default withStyles(styles)(greeting);
