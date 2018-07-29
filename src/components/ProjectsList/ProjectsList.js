import React, {Fragment} from 'react';
import {Divider, Grid, Typography} from "@material-ui/core";

import {Link} from 'react-router-dom';

const projectsList = ({projects, threeCols}) => (
    <Grid container spacing={16}>
        {projects.map(({id, title, categories, thumbnail}) => (
            <Grid item xs={12} sm={threeCols ? 4 : 6} key={id}>
                <img src={thumbnail.src}
                     title={thumbnail.title}
                     alt={thumbnail.title}
                     style={{borderRadius: '5px 5px 0 0'}}
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
                                  to={`/portfolio/${category}`}
                            >
                                {category}
                            </Link>
                            {i === categories.length - 1 ? '' : ', '}
                        </Fragment>
                    ))}
                </Typography>
                <Typography gutterBottom variant="headline" component="h2">
                    {title}
                </Typography>
                <Divider/>
            </Grid>
        ))}
    </Grid>
);

export default projectsList;