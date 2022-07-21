import { Grid, Stack, SvgIcon, Theme, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import { ReactComponent as FistIcon } from "../../../../assets/icons/Fist.svg";
import LeafBottomLeft from "../../../../assets/images/LeafBottomLeft.svg";
import LeafBottomRight from "../../../../assets/images/LeafBottomRight.svg";
import LeafTopLeft from "../../../../assets/images/LeafTopLeft.svg";
import LeafTopRight from "../../../../assets/images/LeafTopRight.svg";
import "./Values.scss";

export default function Values() {
  const mobileScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("mobile"));
  const smScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <Box id="page_values">
      <Stack className="w-100 h-100" alignItems="center" justifyContent="center" flex="1">
        <Container className="h-100" maxWidth="lg">
          <Stack className="h-100 gap-sm" direction="column" alignItems="center" justifyContent="center">
            <p className={`body1 font-family-secondary text-light`}>OUR VALUES</p>
            <p className={`text-weight-500 font-family-secondary text-light ${smScreen ? "h3" : "h2"}`}>Building a Better World</p>

            <Grid className="mt-md" container direction="row" spacing={4}>
              <Grid item sm={12} md={4}>
                <Stack className="gap-sm" direction="column" alignItems="center">
                  <Stack className="bg-light border-radius-circle" alignItems="center" justifyContent="center" width="64px" height="64px">
                    <SvgIcon className="fill-primary" component={FistIcon} inheritViewBox sx={{ width: "40px", height: "40px" }} />
                  </Stack>
                  <p className={`text-light ${mobileScreen ? "caption2" : "body3"}`}>Leadership Development</p>
                  <p className={`text-light text-center ${mobileScreen ? "w-100 caption1" : smScreen ? "w-75 body1" : "w-100 body1"}`}>
                    Team building, problem-solving, and self empowerment to prepare current and future leaders to perform effectively in their roles.
                  </p>
                </Stack>
              </Grid>

              <Grid item sm={12} md={4}>
                <Stack className="gap-sm" direction="column" alignItems="center">
                  <Stack className="bg-light border-radius-circle" alignItems="center" justifyContent="center" width="64px" height="64px">
                    <SvgIcon className="fill-primary" component={FistIcon} inheritViewBox sx={{ width: "40px", height: "40px" }} />
                  </Stack>
                  <p className={`text-light ${mobileScreen ? "caption2" : "body3"}`}>Self Confidence</p>
                  <p className={`text-light text-center ${mobileScreen ? "w-100 caption1" : smScreen ? "w-75 body1" : "w-100 body1"}`}>
                    Personal growth through understanding individual and cultural identity, self awareness development through mediation practice and
                    Dhamma lectures.
                  </p>
                </Stack>
              </Grid>

              <Grid container item sm={12} md={4}>
                <Stack className="gap-sm" direction="column" alignItems="center">
                  <Stack className="bg-light border-radius-circle" alignItems="center" justifyContent="center" width="64px" height="64px">
                    <SvgIcon className="fill-primary" component={FistIcon} inheritViewBox sx={{ width: "40px", height: "40px" }} />
                  </Stack>
                  <p className={`text-light ${mobileScreen ? "caption2" : "body3"}`}>Community Involvement</p>
                  <p className={`text-light text-center ${mobileScreen ? "w-100 caption1" : smScreen ? "w-75 body1" : "w-100 body1"}`}>
                    Service learning, volunteerism, and community development to bring positive, measureable change and promote sustainable decisions.
                  </p>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Stack>

        <img id="values_background_leaf_top_left" src={LeafTopLeft} alt="Background Leaf - Top Left" />
        <img id="values_background_leaf_top_right" src={LeafTopRight} alt="Background Leaf - Top Right" />
        <img id="values_background_leaf_bottom_right" src={LeafBottomRight} alt="Background Leaf - Bottom Right" />
        <img id="values_background_leaf_bottom_left" src={LeafBottomLeft} alt="Background Leaf - Bottom Left" />
    </Box>
  );
}
