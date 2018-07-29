import React from 'react';
import {Button, Typography} from "@material-ui/core";
import ProjectsList from "../ProjectsList/ProjectsList";
import {projects} from "../../data";

const portfolioHomePage = () => {
    const updatedProjects = projects.slice(0, 2);

    return (
        <section style={{maxWidth: 1140, margin: 'auto'}}>
            <Typography variant="display1" style={{textAlign: 'center', margin: '40px 0 32px'}}>
                LATEST PROJECTS
            </Typography>
            <ProjectsList projects={updatedProjects}/>
            <Button variant='outlined'
                    color='secondary'
                    style={{display: 'block', margin: '40px auto 32px'}}
            >
                SEE MORE
            </Button>
        </section>
    )
};

export default portfolioHomePage;