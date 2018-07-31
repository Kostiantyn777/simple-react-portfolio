import React from 'react';
import {Grid} from "@material-ui/core";
import ProjectCard from './ProjectCard/ProjectCard';

const projectsList = ({projects, pushToProjectPage}) => (
    <Grid container spacing={16}>
        {projects.map(project => (
            <Grid item xs={12} sm={6} md={4} key={project.id} component='section'>
                <ProjectCard {...project} pushToProjectPage={pushToProjectPage}/>
            </Grid>
        ))}
    </Grid>
);

export default projectsList;