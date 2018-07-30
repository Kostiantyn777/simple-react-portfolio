import React from 'react';
import {withStyles} from '@material-ui/core';

const styles = theme => ({
    img: {
        borderRadius: '5px',
        boxShadow: theme.shadows[2],
        // transition: 'box-shadow 100ms ease-in-out',
        // '&:hover': {
        //     boxShadow: theme.shadows[8]
        // }
    }
});

const projectImgs = ({classes, img}) => (
    <img src={img.lg}
         srcSet={`${img.sm} 360w, ${img.md} 560w, ${img.lg} 950w`}
         sizes='(max-width: 390px) 360px, (max-width: 590px) 560px, (max-width: 960px) 930px'
         className={classes.img}
         alt={img.title}/>
);

export default withStyles(styles)(projectImgs);