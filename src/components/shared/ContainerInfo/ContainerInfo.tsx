import { Grid, Link, Typography } from "@mui/material";
import * as React from "react";

export enum TextEnum {
  Link = "Link",
  Text = "Text",
}
interface IContainerInfo {
  Icon: React.ReactNode;
  text: string;
  linkText?: string
}

const ContainerInfo: React.FC<IContainerInfo> = ({ Icon, text, linkText }) => (
  <Grid container direction="row" alignItems="center" spacing={1}>
    <Grid item>{Icon}</Grid>
    <Grid item>
      {linkText ? (
        <Link href={`${linkText}`} underline="none">{text}</Link>
      ) : (
        <Typography variant="body2">{text}</Typography>
      )}
    </Grid>
  </Grid>
);

export default ContainerInfo;
