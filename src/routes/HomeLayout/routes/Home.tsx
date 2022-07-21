import { Box } from "@mui/material";
import Campers from "../components/Campers/Campers";
import Counselors from "../components/Counselors/Counselors";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Mission from "../components/Mission/Mission";
import Sponsors from "../components/Sponsors/Sponsors";
import Values from "../components/Values/Values";

export default function Home() {
  return (
    <Box className="w-100 h-100">
      <Hero />
      <Mission />
      <Values />
      <Campers />
      <Counselors />
      <Sponsors />
      <Footer />
    </Box>
  );
}
