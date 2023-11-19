import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Grid, Typography } from "@mui/material";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { teal } from "@mui/material/colors";
import Expiriances from "../Expiriances/Expiriances";

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
          SHORT INFO
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
          With over eight years of experience in software engineering, I have
          developed a range of skills and competencies in front-end and back-end
          development, freelance projects, and various JS frameworks. I have a
          Bachelor's degree in Agriculture, Agriculture Operations, and Related
          Sciences from the National University of Life and Environmental
          Sciences of Ukraine, and an expert certificate in computer specialist
          from Smart.js Academy, where I learned the best practices and
          standards of web development. I am result-oriented, problem-solving,
          and communicative, with a strong passion for web development and
          continuous learning. I speak English, Russian, and Ukrainian fluently.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          marginTop: 5,
        }}
      />
      <Grid item xs={1}>
        <BusinessCenterIcon
          htmlColor={teal["300"]}
          fontSize="large"
        ></BusinessCenterIcon>
      </Grid>
      <Grid item xs={11}>
        <Typography variant="h4" color={teal["300"]}>
          EXPERIENCES
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Expiriances />
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
