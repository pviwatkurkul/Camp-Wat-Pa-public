import { Grid, Stack, Theme, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import SponsorsImage from "../../../../assets/images/Sponsors2025.webp";
import "./Sponsors.scss";

export default function Sponsors() {
  const smallHeight = useMediaQuery("(max-height:720px)");
  const xsScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  const smScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <Box id="page_sponsors">
      <Box id="link_sponsors" visibility="hidden" top={smallHeight ? "-4.5rem" : "-9rem"} position="relative" display="block" />

      <Stack className="w-100 h-100" alignItems="center" justifyContent="center">
        <Container className="h-100 bg-secondaryLight" maxWidth="lg">
          <Grid className="h-100" container spacing={smScreen ? 6 : 12} alignItems="start" justifyContent="start">
            <Grid item xs={12} sm={12} md={6} alignItems="center" justifyContent="center">
              <p className={`text-dark font-family-secondary mb-ba ${xsScreen ? "h2" : "h1 text-left"}`}>Sponsors</p>
              <Box className={`bg-dark mb-xxl`} height="2px" width="4rem" />
              <p className={`mb-ba text-weight-400 text-dark ${smallHeight ? "caption2 " : "body1"}`}>
                Camp Wat Pa could not be possible without the generous support of the community. If you are interested in supporting Camp Wat Pa,
                please consider volunteering or making a food or monetary donation.
              </p>
              <span className={`text-weight-400 text-dark ${smallHeight ? "caption2 " : "body1"}`}>
                Contact{" "}
                <a className="body3 text-primary" href="mailto:campwatpa@gmail.com">
                  campwatpa@gmail.com
                </a>{" "}
                for more information.
              </span>
              <p className={`mt-ba text-weight-400 text-dark ${smallHeight ? "caption2 " : "body1"}`}>
                Anything you can help us with will be greatly appreciated!
              </p>
            </Grid>
            <Grid container item xs={smallHeight ? 10 : 12} mobile={12} md={6}>
              <Box id="sponsors_image_container">
                <img className="main_image" src={SponsorsImage} alt="Sponsors" loading="lazy" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
}
