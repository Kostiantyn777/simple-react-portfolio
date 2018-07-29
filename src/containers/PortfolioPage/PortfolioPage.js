import React, {Component} from 'react'

import {Typography} from '@material-ui/core'
import ProjectsList from '../../components/ProjectsList/ProjectsList';

import {projects} from "../../data";

class PortfolioPage extends Component {
    render () {
        const {match} = this.props;
        let displayedProjects = projects;

        if (match.url === '/portfolio/design'){
            displayedProjects = projects.filter(project => project.categories.includes('design'))
        } else if (match.url === '/portfolio/development') {
            displayedProjects = projects.filter(project => project.categories.includes('development'))
        }

        return (
            <section className='fixed-container'>
                <Typography variant="display1" style={{marginTop: 32, marginBottom: 32, textAlign: 'center'}}>PORTFOLIO</Typography>
                <ProjectsList projects={displayedProjects} threeCols/>
            </section>
        )
    }
}

export default PortfolioPage;