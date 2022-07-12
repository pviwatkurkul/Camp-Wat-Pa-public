import { Box, Grid, IconButton, Stack, SvgIcon } from "@mui/material";
import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import "./HomeLayout.scss";
import Button from "../../components/Button/Button";
import useScrollPosition from "../../hooks/useScrollPositon";

export default function HomeLayout() {
  const scrollPosition = useScrollPosition();

  return (
    <Box id="layout-home">
      <Stack
        id="navigation"
        className={`${scrollPosition !== 0 ? "shadow-nav" : undefined}`}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <p className="body3 text-dark text-uppercase">CAMP WAT PA</p>
        <Stack className="gap-ba" direction="row" alignItems="center">
          <p className="body3 text-capitalize text-dark">About</p>
          <p className="body3 text-capitalize text-dark">Get Involved</p>
          <p className="body3 text-capitalize text-dark">Sponsors</p>
          <p className="body3 text-capitalize text-dark">Gallery</p>
          <Button className="caption2" color="primary" variant="contained" size="small">
            Contact Us
          </Button>
        </Stack>
      </Stack>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Box>
  );
}
