import CardMedia from "@mui/material/CardMedia";
import { Grid, Typography } from "@mui/material";
import { Email, Call, LinkedIn, GitHub } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import image from "./image";

import ContainerInfo from "../shared/ContainerInfo/ContainerInfo";


export default function RecipeReviewCard() {
  return (
    <Grid container direction="row" alignItems="center" spacing={2} sx={{
        backgroundColor: teal['100']
    }}>
      <Grid item xs={12}>
        <CardMedia
          component="img"
          image={image}
          alt="It's me Andrii KAtrusha"
          sx={{
            borderRadius: '50%',
            '& > img': {
              width: '100%',
              height: '100%',
            }
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" color="text.secondary">
          Andrii Katrusha
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ContainerInfo Icon={<Email />} text="andrey.katrusha@gmail.com" linkText="mailto:andrey.katrusha@gmail.com" />
        <ContainerInfo Icon={<Call />} text="+48572741" />
        <ContainerInfo
          Icon={<LinkedIn />}
          text="linkedin"
          linkText="https://www.linkedin.com/in/kaflan"
        />
        <ContainerInfo Icon={<GitHub />} text="git" linkText="https://github.com/kaflan" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" color="text.secondary">
          LANGUAGES
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">English (Professional) B2</Typography>
        <Typography variant="body1">Ukrainian (Native)</Typography>
        <Typography variant="body1">Polish (Basic) A2</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" color="text.secondary">
          EDUCATION
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          The National University of Life and Environmental Sciences of Ukraine
        </Typography>
        <Typography variant="body1"> 2009 – 2012</Typography>
        <Typography variant="body1">Bachelor's Degree in Agronomy</Typography>
      </Grid>
    </Grid>
  );
}
