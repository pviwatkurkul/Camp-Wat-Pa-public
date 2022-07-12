import { Grid, Stack, useMediaQuery } from "@mui/material";
import { Box, Container, useTheme } from "@mui/system";
import HeroImage from "../../../../assets/images/Hero.jpeg";
import Button from "../../../../components/Button/Button";
import "./Home.scss";

export default function Home() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Container className="bg-primary100 border-radius-2" disableGutters>
        <Grid className="p-xxl" container direction={{ xs: "column-reverse", md: "row" }} spacing={2} wrap="nowrap" minHeight={{ md: "464px" }}>
          <Grid container item xs={12} md={6} alignItems={{ xs: "center" }} justifyContent={{ xs: "center" }}>
            <Grid container item justifyContent="center" direction="column">
              <p className={`text-weight-700 text-dark mb-sm ${smScreen ? "h2 text-center" : "h1"}`}>Camp Wat Pa</p>
              <p className={`text-dark text-weight-400 ${smScreen ? "body2 text-center" : "h3 text-left"}`}>Empowering our youth.</p>
              <p className={`text-dark text-weight-400 ${smScreen ? "body2 text-center" : "h3"}`}>Unifying our community.</p>
              <Stack direction="row" alignItems="center" justifyContent={{ xs: "center", md: "left" }}>
                <Button className="body1 mt-xl" color="primary" variant="contained" size="large">
                  Learn More
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Grid container item xs={12} md={6} alignItems="center" justifyContent="center">
            <img className="border-radius-2" src={HeroImage} alt="Hero" height="100%" width="100%" style={{ maxWidth: smScreen ? "60%" : "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
