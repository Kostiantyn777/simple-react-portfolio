import React from 'react';
import {Button, Typography} from "@material-ui/core";
import ProjectsList from "../ProjectsList/ProjectsList";
import {projects} from "../../data";

const portfolio = ({pushToPortfolioPage, pushToProjectPage}) => {
    const updatedProjects = projects.slice(0, 2);

    return (
        <section className='fixed-container'>
            <Typography variant="display1" style={{textAlign: 'center', margin: '40px 0 32px'}}>
                LATEST PROJECTS
            </Typography>
            <ProjectsList projects={updatedProjects} pushToProjectPage={pushToProjectPage}/>
            <Button variant='outlined'
                    onClick={pushToPortfolioPage}
                    color='secondary'
                    style={{display: 'block', margin: '40px auto 32px'}}
            >
                SEE MORE
            </Button>
        </section>
    )
};

export default portfolio;