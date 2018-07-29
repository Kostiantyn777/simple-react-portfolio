import React, {Fragment} from 'react'
import {Divider, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const projectCard = ({id, title, categories, thumbnail}) => (
    <Fragment>
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
    </Fragment>
);

export default projectCard;