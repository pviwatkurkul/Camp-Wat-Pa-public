import { Divider, Grid, Stack, SvgIcon, Theme, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import CounselorsImage from "../../../../assets/images/Counselors.jpg";
import Button from "../../../../components/Button/Button";
import { ReactComponent as ArrowRightIcon } from "../.././../../assets/icons/ArrowRight.svg";
import "./Counselors.scss";

export default function Counselors() {
  const smallHeight = useMediaQuery("(max-height:720px)");
  const xsScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  const smScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <Box id="page_counselors" className={smScreen && !smallHeight ? "small-screen" : undefined}>
      <Box id="link_counselors" visibility="hidden" top={smallHeight ? "-4.5rem" : "-9rem"} position="relative" display="block" />

      <Stack className="w-100 h-100" alignItems="center" justifyContent="center">
        <Container className="h-100 bg-secondaryLight" maxWidth="lg">
          <Grid className="h-100" container spacing={12} alignItems="start" justifyContent="space-between">
            <Grid item xs={12} md={6} alignItems="center" justifyContent="center">
              <p className={`text-dark font-family-secondary mb-ba ${xsScreen ? "h2" : "h1 text-left"}`}>Get Involved</p>
              <Box className={`bg-dark mb-xxl`} height="2px" width="4rem" />

              <p className="body4 text-weight-500 text-dark mb-ba">Junior Counselors</p>
              <p className={`mb-ba text-weight-400 text-dark ${smallHeight ? "caption2 " : "body1"}`}>
                The Junior Counselor Program was created to provide a firsthand learning experience for future CWP Counselors. Under the guidance and
                mentorship of senior counselors, junior counselors will be trained on responsibility, teamwork, problem solving, and the necessary
                skills to one day independently lead. This is our community, and we must take charge in nourishing its growth.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc5rT-4gC77t7IZDdBxJ1o5llba02tfg22TCjmGb14csPEXmQ/viewform"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  size={xsScreen ? "medium" : "large"}
                  fullWidth={xsScreen ? true : false}
                  endIcon={<SvgIcon component={ArrowRightIcon} sx={{ width: "16px", height: "16px" }} />}
                >
                  Apply Now
                </Button>
              </a>

              <Divider className="my-lg" light />

              <p className="body4 text-weight-500 text-dark mb-ba">Counselors</p>
              <p className={`mb-ba text-weight-400 text-dark ${smallHeight ? "caption2 " : "body1"}`}>
                Camp Wat Pa counselors dedicate their time and energy into creating a community for the Thai American youth. Many counselors today
                were campers from previous years who want to give back to their community. From hosting workshops to participating in activities
                alongside campers, counselors are given the opportunities to shape junior counselors and campers into the future of tomorrow.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfbg83Z_v8o3kY1cS0oSs8SnT0JWWGhtSiIneYGcbkLlAR8Ow/viewform"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  size={xsScreen ? "medium" : "large"}
                  fullWidth={xsScreen ? true : false}
                  endIcon={<SvgIcon component={ArrowRightIcon} sx={{ width: "16px", height: "16px" }} />}
                >
                  Apply Now
                </Button>
              </a>
            </Grid>
            <Grid item sm={6} display={{ xs: "none", md: "flex" }}>
              <Box id="counselors_image_container">
                <Box className="image_shadow" />
                <img className="main_image" src={CounselorsImage} alt="Campers on a zip line" height="415px" loading="lazy" />
                <Box className="image_description">
                  <p className="h4 text-light mb-ba">Meet Our Counselors</p>
                  <p className="caption2 text-light text-weight-300">
                    Camp Wat Pa is an overnight Thai-American youth leadership program camp hosted on Labor Day Weekend. It provides an opportunity
                    for young adults of the Thai-American community to give back and share their experiences to the growing generation of Thai youth.
                    However, Camp Wat Pa isn't possible without YOU! We need counselors and volunteers like you. It is YOU who makes Camp Wat Pa fun,
                    empowering, and eye-opening.
                  </p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
}
