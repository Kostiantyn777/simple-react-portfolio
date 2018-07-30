import React from 'react';
import {Typography} from "@material-ui/core";
import CategoriesList from '../../components/CategoriesList/CategoriesList';

const projectDesc = ({description, categories, url}) => {
    const split = description.split('\n');

    return (
        <section style={{borderLeft: '1px solid rgba(0, 0, 0, 0.12)', paddingLeft: 8}}>
            {split.map((paragraph, i) => (
                <Typography variant='body2' key={split.indexOf(paragraph)}>
                    {paragraph.trim()}
                </Typography>
            ))}
            {
                url.length > 0
                    ? (<Typography style={{marginTop: 5, marginBottom: 5}} variant='body2'>
                        Here you can check <a href={url} className='link' target='_blank'>this project</a>.
                    </Typography>)
                    : null
            }
            {
                categories.length > 0
                    ? <CategoriesList categories={categories}/>
                    : null
            }
        </section>
    )
};

export default projectDesc;