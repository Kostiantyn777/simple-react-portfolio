import React, {Component} from 'react'

import {Typography} from '@material-ui/core'
import ProjectsList from '../../components/ProjectsList/ProjectsList';

import {projects} from "../../data";

class PortfolioPage extends Component {

    pushToProjectPage = projectId => () => {
        this.props.history.push('/portfolio/' + projectId)
    };

    render () {
        const {match} = this.props;
        let displayedProjects = projects;

        if (match.url === '/portfolio/design') {
            displayedProjects = projects.filter(project => project.categories.includes('design'))
        } else if (match.url === '/portfolio/development') {
            displayedProjects = projects.filter(project => project.categories.includes('development'))
        }

        return (
            <section className='fixed-container'>
                <Typography variant="display1" className='container-title'>PORTFOLIO</Typography>
                <ProjectsList projects={displayedProjects} pushToProjectPage={this.pushToProjectPage}/>
            </section>
        )
    }
}

export default PortfolioPage;