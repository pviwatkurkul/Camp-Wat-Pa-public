import { Grid, Stack, Theme, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import MissionAImage from "../../../../assets/images/MissionA.webp";
import MissionBImage from "../../../../assets/images/MissionB.webp";
import MissionCImage from "../../../../assets/images/MissionC.webp";
import "./Mission.scss";

export default function Mission() {
  const smallHeight = useMediaQuery("(max-height:720px)");
  const xsScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <Box id="page_mission">
      <Box id="link_mission" visibility="hidden" top="-5rem" position="relative" display="block" />

      <Stack className="w-100 h-100" alignItems="center" justifyContent="center">
        <Container className="h-100 bg-secondaryLight" maxWidth="lg">
          <Grid className="h-100" container flexDirection="row" spacing={4} wrap="nowrap">
            <Grid container item sm={12} md={8} direction="column" justifyContent={{ xs: "space-between" }} spacing={4} wrap="nowrap">
              <Grid item xs={smallHeight ? 6 : 5} md={6} minHeight={{ xs: 0 }}>
                <p className={`font-family-secondary mb-ba text-dark ${xsScreen ? "h2 text-center" : "h1 text-left"}`}>Our Mission</p>
                <Box className={`bg-dark mb-xxl ${xsScreen ? "mx-auto" : ""}`} height="2px" width="4rem" />
                <p className={`text-weight-400 text-dark ${xsScreen ? "text-center" : "text-left"} ${smallHeight ? "caption2 " : "body1"}`}>
                  Camp Wat Pa is a Thai-American youth leadership program camp hosted on Labor Day Weekend. It provides an opportunity for young
                  adults of the Thai-American community to give back and share their experiences with the growing generation of Thai youth. Camp Wat
                  Pa aims to immerse campers in a series of inspirational workshops and activities focusing on leadership development, community
                  involvement, individual growth, and identity recognition.
                </p>
              </Grid>
              <Grid
                container
                item
                direction="row"
                xs={smallHeight ? 6 : 7}
                md={6}
                spacing={4}
                justifyContent="center"
                wrap="nowrap"
                minHeight={{ xs: 0 }}
              >
                <Grid item xs={12} mobile={10} sm={6}>
                  <img className="mission-image" src={MissionAImage} alt="Many Campers walking in an aisle" loading="lazy" />
                </Grid>
                <Grid item sm={6} display={{ xs: "none", mobile: "none", sm: "flex" }}>
                  <img className="mission-image" src={MissionBImage} alt="Four Campers in Zip Line Gear" loading="lazy" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={4} display={{ xs: "none", mobile: "none", sm: "none", md: "flex" }}>
              <img className="mission-image" src={MissionCImage} alt="Two campers sitting on a bench" loading="lazy" />
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
}
