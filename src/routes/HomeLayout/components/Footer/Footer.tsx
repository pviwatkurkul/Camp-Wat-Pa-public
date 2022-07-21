import { IconButton, Stack, SvgIcon, Theme, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import LeafBottomLeft from "../../../../assets/images/LeafBottomLeft.svg";
import LeafBottomRight from "../../../../assets/images/LeafBottomRight.svg";
import LeafTopLeft from "../../../../assets/images/LeafTopLeft.svg";
import LeafTopRight from "../../../../assets/images/LeafTopRight.svg";
import { ReactComponent as FacebookIcon } from "../../../../assets/icons/Facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../../assets/icons/Instagram.svg";
import "./Footer.scss";

export default function Footer() {
  const smScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <Box id="page_footer">
      <Stack className="w-100 h-100" alignItems="center" justifyContent="center" flex="1">
        <Container className="h-100" maxWidth="lg">
          <Stack className="h-100" direction="column" alignItems="center" justifyContent="center">
            <p className={`text-light mb-xs ${smScreen ? "body3" : "body4"}`}>For more information, please email us at</p>
            <a className={`text-secondary mb-lg ${smScreen ? "h4" : "h3"}`} href="mailto:campwatpa@gmail.com">
              campwatpa@gmail.com
            </a>
            <p className="body4 text-weight-500 text-light mb-ba">Follow Us</p>
            <Stack className="gap-md" direction="row">
              <a href="https://www.facebook.com/campwatpa" target="_blank" rel="noreferrer">
                <IconButton className="bg-secondary" size="small">
                  <SvgIcon className="fill-dark" component={FacebookIcon} />
                </IconButton>
              </a>
              <a href="https://www.instagram.com/campwatpa/" target="_blank" rel="noreferrer">
                <IconButton className="bg-secondary" size="small">
                  <SvgIcon className="fill-dark" component={InstagramIcon} />
                </IconButton>
              </a>
            </Stack>
          </Stack>
        </Container>
      </Stack>

      <img id="footer_background_leaf_top_left" src={LeafTopLeft} alt="Background Leaf - Top Left" />
      <img id="footer_background_leaf_top_right" src={LeafTopRight} alt="Background Leaf - Top Right" />
      <img id="footer_background_leaf_bottom_right" src={LeafBottomRight} alt="Background Leaf - Bottom Right" />
      <img id="footer_background_leaf_bottom_left" src={LeafBottomLeft} alt="Background Leaf - Bottom Left" />
    </Box>
  );
}
