import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Grid, Typography } from "@mui/material";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import { teal } from "@mui/material/colors";

const ProfileInfo = () => {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        paddingLeft: 20,
        paddingTop: 5,
        paddingRight: 20,
      }}
    >
      <Grid item xs={1}>
        <ArchitectureIcon
          htmlColor={teal["300"]}
          fontSize="large"
        ></ArchitectureIcon>
      </Grid>
      <Grid item xs={11}>
        <Typography variant="h4" color={teal["300"]}>
          Technology/Methodology:
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          marginTop: 5,
        }}
      />
      <Grid item xs={12}>
        <Grid container alignItems="baseline">
          <Grid item xs={3}>
            <Typography variant="subtitle1">Languages & Frameworks:</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle2">
              JavaScript, TypeScript, Angular, Angular.js, Vue.js, React, React
              Native, Redux, Redux-middleware, Redux-Saga, Redux-Thunk, Node.js,
              Express.js, Passport.js, D3.js, HTML5, CSS3, Bootstrap, BEM, SASS,
              MACSS/ OOCSS, Postman, GraphQL
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">
              Services & Integrations:
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle2">
              Payment Processors (Stripe), OAuth 2.0, FiberBase, Google API
              document, Google API map Deployment Tools; Gulp, Webpack, Docker,
              Grunt, Git, GitHub, GitLab CI – basics
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">Databases</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle2">
              MongoDB, PostgreSQL, DynamoDB
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">Cloud Technologies:</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle2">AWS, Google Cloud</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          marginTop: 5,
        }}
      />
      <Grid item xs={1}>
        <AccountCircleIcon
          htmlColor={teal["300"]}
          fontSize="large"
        ></AccountCircleIcon>
      </Grid>
      <Grid item xs={11}>
        <Typography variant="h4" color={teal["300"]}>
          CAREER PROFILE
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          marginTop: 5,
        }}
      />
      <Grid item xs={12}>
        <Typography variant="subtitle2">
          8+ years of diverse project development experience, including client
          and shareholder milestone demos. Proficient in modern tools (npm,
          webpack, Git), with strong foundations in Object-Oriented and MVC
          patterns. Basic familiarity with Node.js and Express.js.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
