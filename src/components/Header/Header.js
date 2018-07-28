import React from 'react';

import {AppBar, Toolbar, Typography} from '@material-ui/core';

const header = () => (
    <AppBar position="sticky">
        <Toolbar variant="dense">
            <Typography variant="subheading" color="inherit">
                Portfolio
            </Typography>
        </Toolbar>
    </AppBar>
);

export default header;