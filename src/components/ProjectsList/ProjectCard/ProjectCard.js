import React, {Fragment} from 'react'
import {Divider, Typography, withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

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
        <Typography color='secondary'
                    style={{marginTop: '0.35em'}}
                    gutterBottom
                    variant="subheading"
                    component='p'
                    className='category-line__after'
        >
            {categories.map((category, i) => (
                <Fragment key={category}>
                    <Link className='link'
                          tabIndex={-1}
                          to={`/portfolio/${category}`}
                    >
                        {category}
                    </Link>
                    {i === categories.length - 1 ? '' : ', '}
                </Fragment>
            ))}
        </Typography>
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