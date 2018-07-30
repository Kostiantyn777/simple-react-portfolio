import React, {Component} from 'react';
import {Grid, Typography} from "@material-ui/core";
import ProjectImgs from '../../components/ProjectImgs/ProjectImgs';
import ProjectDesc from '../../components/ProjectDesc/ProjectDesc';

import {projects} from "../../data";

class ProjectPage extends Component {
    state = {
        description: '',
        img: {},
        categories: [],
        title: '',
        url: ''
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        const id = nextProps.match.params.projectId;
        const project = projects.find(project => project.id === id);

        if (project) {
            return {
                ...prevState,
                ...project
            }
        } else {
            return {
                ...prevState,
                title: 'Project doesn\'t exist. Please select another one'
            }
        }
    }

    render() {
        const {title, description, img, categories, url} = this.state;

        return (
            <section className='fixed-container'>
                <Typography variant="display1" className='container-title'>
                    {title}
                </Typography>
                <Grid container spacing={16}>
                    <Grid item xs={12} md={8}>
                        <ProjectImgs img={img}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProjectDesc description={description} url={url} categories={categories}/>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default ProjectPage;