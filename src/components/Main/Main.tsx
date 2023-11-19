import React from "react";
import { Grid } from "@mui/material";
import AbouteMe from "../AboutMe/AboutMe";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const App = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <ProfileInfo />
      </Grid>
      <Grid item xs={2}>
        <Grid>
          <AbouteMe />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
