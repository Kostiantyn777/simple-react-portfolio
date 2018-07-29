import React from 'react';
import {Grid} from "@material-ui/core";
import ProjectCard from './ProjectCard/ProjectCard';

const projectsList = ({projects, threeCols}) => (
    <Grid container spacing={16}>
        {projects.map(project => (
            <Grid item xs={12} sm={threeCols ? 4 : 6} key={project.id}>
                <ProjectCard {...project}/>
            </Grid>
        ))}
    </Grid>
);

export default projectsList;