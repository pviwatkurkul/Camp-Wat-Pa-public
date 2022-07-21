import { Fragment, useState } from "react";
import { Box, Drawer, IconButton, Stack, SvgIcon, Theme, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPositon";
import { ReactComponent as LogoHorizontalImage } from "../../assets/images/LogoHorizontal.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/Menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/Close.svg";
import "./HomeLayout.scss";

export default function HomeLayout() {
  const scrollPosition = useScrollPosition();
  const xsScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <Box id="layout-home">
      <Stack
        id="navigation"
        className={`mx-auto ${scrollPosition !== 0 ? "scroll-nav" : "static-nav"}`}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="false"
      >
        <Stack className="gap-sm" direction="row" alignItems="center" justifyContent="center">
          <LogoHorizontalImage id="logo" />
        </Stack>
        <Stack className="gap-lg" direction={xsScreen ? "row-reverse" : "row"} alignItems="center">
          {!xsScreen ? (
            <Fragment>
              <a href="#link_mission" className="body3 text-capitalize">
                About
              </a>
              <a href="#link_campers" className="body3 text-capitalize">
                Campers
              </a>
              <a href="#link_counselors" className="body3 text-capitalize">
                Counselors
              </a>
              <a href="#link_sponsors" className="body3 text-capitalize">
                Sponsors
              </a>
            </Fragment>
          ) : (
            <Fragment>
              <IconButton onClick={() => setDrawerOpen(true)}>
                <SvgIcon id="menu-icon" component={MenuIcon} />
              </IconButton>
              <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor="right">
                <Box id="mobile-nav">
                  <IconButton onClick={() => setDrawerOpen(false)}>
                    <SvgIcon className="fill-dark" component={CloseIcon} />
                  </IconButton>
                  <Stack className="w-100 h-100" direction="column" alignItems="end" justifyContent="center">
                    <a href="#link_mission" onClick={() => setDrawerOpen(false)}>
                      ABOUT
                    </a>
                    <a href="#link_campers" onClick={() => setDrawerOpen(false)}>
                      CAMPERS
                    </a>
                    <a href="#link_counselors" onClick={() => setDrawerOpen(false)}>
                      COUNSELORS
                    </a>
                    <a href="#link_sponsors" onClick={() => setDrawerOpen(false)}>
                      SPONSORS
                    </a>
                  </Stack>
                </Box>
              </Drawer>
            </Fragment>
          )}
        </Stack>
      </Stack>
      <Box className="w-100">
        <Outlet />
      </Box>
    </Box>
  );
}
