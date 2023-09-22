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
    justifyContent="space-between"
    alignItems="center"
    spacing={2}
  >
    <Grid item>
        {Icon}
    </Grid>
    <Grid item>
      <Typography variant="body2">{text}</Typography>
    </Grid>
  </Grid>
);

export default ContainerInfo;
