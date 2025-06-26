import { Grid, Stack, SvgIcon, Theme, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import FunA from "../../../../assets/images/FunA.webp";
import FunB from "../../../../assets/images/FunB.webp";
import Button from "../../../../components/Button/Button";
import { ReactComponent as MapIcon } from "../.././../../assets/icons/Map.svg";
import { ReactComponent as CalendarIcon } from "../.././../../assets/icons/Calendar.svg";
import "./Campers.scss";

export default function Campers() {
  const smallHeight = useMediaQuery("(max-height:720px)");
  const xsScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  const smScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <Box id="page_campers" className={smScreen && !smallHeight ? "small-width" : undefined}>
      <Box id="link_campers" visibility="hidden" top={smallHeight ? "-6rem" : "-9rem"} position="relative" display="block" />

      <Stack className="w-100 h-100" alignItems="center" justifyContent="center">
        <Container className="h-100 bg-secondaryLight" maxWidth="lg">
          <Grid className="h-100" container spacing={12} alignItems="center" justifyContent="space-between">
            <Grid container item md={5} alignItems="center" justifyContent="center" display={{ xs: "none", md: "flex" }}>
              <Box id="campers_image_container">
                <Box className="image_shadow" />
                <img className="main_image" src={FunA} alt="Campers on a zip line" height="420px" loading="lazy" />
                <img className="sub_image" src={FunB} alt="Campers in zip line gear, fist bumping" height="200px" loading="lazy" />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} alignItems="center" justifyContent="center">
              <p className={`font-family-secondary mb-ba text-dark ${xsScreen ? "h2" : "h1 text-left"}`}>Join the Fun</p>
              <Box className={`bg-dark mb-xxl`} height="2px" width="4rem" />
              <div className="text-center" style={{ paddingBottom: "40px" }}>
                <img className="border-radius-3 show-mobile-only center" src={FunA} alt="Campers on a zip line" width="90%" loading="lazy" />
              </div>
              <p className={`mb-ba text-weight-400 text-dark ${smallHeight ? "caption2 " : "body1"}`}>
                Camp Wat Pa is an overnight Thai-American youth leadership program camp hosted on Labor Day Weekend. It provides an opportunity for
                young adults of the Thai-American community to give back and share their experiences to the growing generation of Thai youth. Open to
                all middle school and high school students, Camp Wat Pa aims to immerse campers in a series of inspirational workshops and activities
                focusing on leadership development, community involvement, individual growth, and identity recognition.
              </p>

              <Stack className="gap-sm mb-ba" direction="row" alignItems="center">
                <SvgIcon component={CalendarIcon} inheritViewBox sx={{ width: "40px", height: "40px" }} />
                <Stack direction="column">
                  <p className="caption1 text-dark text-weight-600">Date</p>
                  <p className={`text-dark ${smallHeight ? "caption2 text-weight-400" : "body1"}`}>
                    Friday, August 29th - Monday, September 1st, 2025
                  </p>
                </Stack>
              </Stack>

              <Stack className="gap-sm" direction="row" alignItems="center">
                <SvgIcon component={MapIcon} inheritViewBox sx={{ width: "40px", height: "40px" }} />
                <Stack direction="column">
                  <p className="caption1 text-dark text-weight-600">Location</p>
                  <p className={`text-dark ${smallHeight ? "caption2 text-weight-400" : "body1"}`}>14036 E. Don Julian Rd., La Puente, CA 91746</p>
                </Stack>
              </Stack>

              <p className={`mb-lg mt-ba text-weight-400 text-dark ${smallHeight ? "caption2 " : "body1"}`}>
                Applicants must be entering grade 6th to 12th Fall 2025. Age exceptions may be made if space is available.{" "}
              </p>
              <Stack className="gap-sm" direction="row" flexWrap="wrap">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdpATNfhrw8veQErcAZkJFRHuVps79RaSuXfn_BPS629XcnBQ/viewform?usp=header"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button color="primary" variant="contained" size={xsScreen ? "medium" : "large"} fullWidth={xsScreen ? true : false}>
                    {"Apply Now (Ages 13 & Over)"}
                  </Button>
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdHZdo8DwUrK4IX4mpvDV-xevI4DL4EAcpLfJUSBTGZRlmdRA/viewform?usp=header"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button color="secondary" variant="contained" size={xsScreen ? "medium" : "large"} fullWidth={xsScreen ? true : false}>
                    {"Apply Now (Ages 12 & Under)"}
                  </Button>
                </a>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
}
