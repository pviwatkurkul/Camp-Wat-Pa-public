import { Grid, IconButton, Stack, SvgIcon, Theme, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Button from "../../../../components/Button/Button";
import HeroBackgroundImage from "../../../../assets/images/HeroBackground.webp";
import HeroImage from "../../../../assets/images/Hero.jpg";
import { ReactComponent as ArrowRightIcon } from "../../../../assets/icons/ArrowRight.svg";
import { ReactComponent as FacebookIcon } from "../../../../assets/icons/Facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../../assets/icons/Instagram.svg";
import { ReactComponent as VideoIcon } from "../../../../assets/icons/Video.svg";
import "./Hero.scss";

export default function Hero() {
  const xsScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  const smScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <Box id="page_hero">
      {/* Background */}
      <Box id="hero_blend" />
      <img src={HeroBackgroundImage} id="hero_background_image" alt="Hero Background" />

      {/* Body */}
      <Grid className="w-100 h-100 mx-auto gap-lg" container alignItems="center" justifyContent="center" maxWidth="lg">
        <Grid
          className="h-100"
          container
          direction="column"
          item
          xs={12}
          md={5}
          alignItems={smScreen ? "center" : "start"}
          justifyContent="center"
          sx={{ position: "relative" }}
        >
          <p className={`${xsScreen ? "h2" : "h1"} text-light mb-md`}>CAMP WAT PA</p>
          <p className={`${xsScreen ? "h5" : "h4"} text-weight-400 text-light mb-sm`}>Empowering our youth.</p>
          <p className={`${xsScreen ? "h5" : "h4"} text-weight-400 text-light`}>Unifying our community.</p>
          <Stack className="gap-ba" direction="row">
            <Button className="mt-ba" color="secondary" variant="contained" size={xsScreen ? "medium" : "large"}>
              <a href="#link_mission">Learn More</a>
            </Button>
            <Button
              className="mt-ba"
              color="primary"
              variant="text"
              size={xsScreen ? "medium" : "large"}
              endIcon={<SvgIcon className="fill-light" component={ArrowRightIcon} />}
            >
              <a href="#link_mission" className="body2 text-light">Get Involved</a>
            </Button>
          </Stack>
          <Stack className="gap-md" id="socials" direction="row">
            <a href="https://www.facebook.com/campwatpa" target="_blank" rel="noreferrer">
              <IconButton color="primary" className="bg-lightGrey50" size="small" aria-label="Facebook Link">
                <SvgIcon color="primary" className="fill-light" component={FacebookIcon} />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/campwatpa/" target="_blank" rel="noreferrer">
              <IconButton className="bg-lightGrey50" size="small" aria-label="Instagram Link">
                <SvgIcon className="fill-light" component={InstagramIcon} />
              </IconButton>
            </a>
          </Stack>
        </Grid>
        <Grid item md={5} display={{ xs: "none", md: "flex" }} sx={{ position: "relative" }}>
          <img className="border-radius-3" src={HeroImage} id="hero_image" alt="Hero" width="100%" />
          <Box id="hero_video_card">
            <Grid className="h-100" container>
              <Grid container item xs={4} className="left-section" alignItems="center" justifyContent="center">
                <SvgIcon className="fill-light" component={VideoIcon} inheritViewBox sx={{ width: "48px", height: "48px" }} />
              </Grid>
              <Grid className="p-ba" container item xs={8} alignItems="center">
                <p className="h5 text-font-500 text-light ml-md">CAMP WAT PA 2022 SLIDE SHOW</p>
                <Button variant="text">
                  <Stack className="gap-xs" direction="row">
                    <a
                      href="https://fb.watch/lKBMny13la/"
                      target="_blank"
                      rel="noreferrer"
                      className="caption1 text-light"
                      style={{ textDecoration: "none" }}
                    >
                      WATCH THE VIDEO
                    </a>
                    <SvgIcon className="fill-light" component={ArrowRightIcon} sx={{ width: "12px", height: "12px" }} />
                  </Stack>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
