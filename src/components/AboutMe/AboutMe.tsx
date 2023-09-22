import CardMedia from "@mui/material/CardMedia";
import { Grid, Typography } from "@mui/material";
import { Email, Call } from "@mui/icons-material";

import image from "./image";

import ContainerInfo from "../shared/ContainerInfo/ContainerInfo";

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
        <ContainerInfo Icon={<Email />} text="andrey.katrusha@gmail.com" />
        <ContainerInfo Icon={<Call />} text="mynumber" />
      </Grid>
    </Grid>
  );
}
