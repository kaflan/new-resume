import React from "react";
import { Grid } from "@mui/material";
import AbouteMe from "../AboutMe/AboutMe";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const App = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <ProfileInfo />
      </Grid>
      <Grid item xs={4}>
        <Grid>
          <AbouteMe />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
