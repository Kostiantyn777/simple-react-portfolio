import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";

const categoriesList = ({categories}) => (
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
);

export default categoriesList;