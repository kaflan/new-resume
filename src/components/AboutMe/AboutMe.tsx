import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

import image from './image';


export default function RecipeReviewCard() {

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <Grid item>
                <CardMedia
                    component="img"
                    height="500"
                    image={image}
                    alt="It's me Andrii KAtrusha"
                />
            </Grid>
            <Grid item>
                <Typography variant="h4" color="text.secondary">
                    Andrii Katrusha
                </Typography>
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item>
                        <EmailIcon />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">
                            andrey.katrusha@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item>
                        <EmailIcon />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">
                            andrey.katrusha@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}