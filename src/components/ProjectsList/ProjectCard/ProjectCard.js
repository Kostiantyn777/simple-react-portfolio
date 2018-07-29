import React, {Fragment} from 'react'
import {Divider, Typography, withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import CategoriesList from '../../CategoriesList/CategoriesList';

const styles = theme => ({
    thumbnail: {
        borderRadius: '5px 5px 0 0',
        cursor: 'pointer',
        transition: 'box-shadow 100ms ease-in-out',
        boxShadow: theme.shadows[2],
        '&:hover': {
            boxShadow: theme.shadows[8]
        }
    },
    title: {
        color: 'inherit',
        textDecoration: 'none',
        transition: 'color 100ms ease-in-out',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
});

const projectCard = ({classes, id, title, categories, thumbnail, pushToProjectPage}) => (
    <Fragment>
        <img src={thumbnail.src}
             title={thumbnail.title}
             alt={thumbnail.title}
             onClick={pushToProjectPage(id)}
             className={classes.thumbnail}
        />
        <CategoriesList categories={categories}/>
        <Typography gutterBottom
                    variant="headline"
                    component="h2"
        >
            <Link className={classes.title}
                  to={'/portfolio/' + id}
            >{title}</Link>
        </Typography>
        <Divider/>
    </Fragment>
);

export default withStyles(styles)(projectCard);