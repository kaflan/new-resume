import { Grid, Typography } from "@mui/material";
import * as React from "react";

interface IContainerInfo {
    Icon: React.ReactNode
    text: string
}

const ContainerInfo: React.FC<IContainerInfo> = ({
    Icon, text
}) => (
  <Grid
    container
    direction="row"
    alignItems="center"
  >
    <Grid item xs={1}>
        {Icon}
    </Grid>
    <Grid item xs={11}>
      <Typography variant="body2">{text}</Typography>
    </Grid>
  </Grid>
);

export default ContainerInfo;
