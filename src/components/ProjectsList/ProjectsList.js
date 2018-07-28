import {Card, CardContent, CardMedia, createStyles, Grid, Typography, WithStyles, withStyles} from "@material-ui/core";
import * as React from 'react';

const styles = createStyles({
    CardMedia: {
        height: 0,
        paddingTop: '56.25%'
    }
});

const projectsList = ({classes}) => (
    <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
            <Card>
                <CardMedia
                    className={classes.CardMedia}
                    image="https://sakhro.xyz/assets/imgs/portfolio/websites/wps_website.jpg"
                    title="IPhone on the table"
                />
                <CardContent>
                    <Typography color='secondary' gutterBottom variant="subheading">
                        development
                    </Typography>
                    <Typography gutterBottom variant="headline" component="h2">
                        DMYTRY LESNOY POKER SCHOOL
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Card>
                <CardMedia
                    className={classes.CardMedia}
                    image="https://sakhro.xyz/assets/imgs/portfolio/websites/restaurant_reviews_website.jpg"
                    title="IPhone on the table"
                />
                <CardContent>
                    <Typography color='secondary' gutterBottom variant="subheading">
                        development
                    </Typography>
                    <Typography gutterBottom variant="headline" component="h2">
                        RESTAURANT REVIEWS PWA
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
);

export default withStyles(styles)(projectsList);