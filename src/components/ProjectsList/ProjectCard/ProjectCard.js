import React, {Fragment} from 'react'
import {Divider, Typography, withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import CategoriesList from '../../CategoriesList/CategoriesList';

const styles = theme => ({
    img: {
        borderRadius: '5px 5px 0 0',
        cursor: 'pointer',
        transition: 'box-shadow 100ms ease-in-out',
        boxShadow: theme.shadows[2],
        '&:hover': {
            boxShadow: theme.shadows[8]
        }
    },
    title: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        transition: 'color 100ms ease-in-out',
        '&:hover': {
            color: 'inherit'
        }
    }
});

const projectCard = ({classes, id, title, categories, img, pushToProjectPage}) => (
    <Fragment>
        <img src={img.lg}
             srcSet={`${img.sm} 360w, ${img.md} 560w, ${img.lg} 950w`}
             sizes='((max-width: 960px) 560px, (min-width: 961px) 360px'
             title={img.title}
             alt={img.title}
             onClick={pushToProjectPage(id)}
             className={classes.img}
        />
        <CategoriesList categories={categories}/>
        <Typography gutterBottom variant="headline" component="h2">
            <Link className={classes.title} to={'/portfolio/' + id}>{title}</Link>
        </Typography>
        <Divider/>
    </Fragment>
);

export default withStyles(styles)(projectCard);