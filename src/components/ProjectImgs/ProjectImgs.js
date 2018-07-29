import React from 'react';
import {withStyles} from '@material-ui/core';

const styles = theme => ({
    thumbnail: {
        borderRadius: '5px',
        // transition: 'box-shadow 100ms ease-in-out',
        // boxShadow: theme.shadows[2],
        // '&:hover': {
        //     boxShadow: theme.shadows[8]
        // }
    }
});

const projectImgs = ({classes, thumbnail}) => <img src={thumbnail.src} className={classes.thumbnail} alt={thumbnail.title}/>;

export default withStyles(styles)(projectImgs);