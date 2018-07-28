import React from 'react';
import {Button, Typography} from "@material-ui/core";
import ProjectsList from "../ProjectsList/ProjectsList";

const portfolioHomePage = () => (
    <section style={{maxWidth: 1140, margin: 'auto'}}>
        <Typography variant="display1"
                    style={{textAlign: 'center', margin: '40px 0 32px'}}
        >
            PORTFOLIO
        </Typography>
        <ProjectsList/>
        <Button variant='raised'
                color='secondary'
                style={{display: 'block', margin: '40px auto 32px'}}
        >
            SEE MORE
        </Button>
    </section>
);

export default portfolioHomePage;