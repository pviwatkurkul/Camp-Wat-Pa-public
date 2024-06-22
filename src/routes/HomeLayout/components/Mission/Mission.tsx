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
          <Grid container flexDirection="row" spacing={4} wrap="nowrap" >
            <Grid container item sm={12} md={8} direction="column" justifyContent={{ xs: "space-between" }} spacing={4} wrap="nowrap" style={{ height: "fit-content" }}>
              <Grid item xs={smallHeight ? 6 : 5} md={6} minHeight={{ xs: 0 }}>
                <p className={`font-family-secondary mb-ba text-dark ${xsScreen ? "h2 text-center" : "h1 text-left"}`}>Empowering Our Youth, Unifying Our Community</p>
                <Box className={`bg-dark mb-xxl ${xsScreen ? "mx-auto" : ""}`} height="2px" width="4rem" />
                <p className={`text-weight-400 text-dark ${xsScreen ? "text-center" : "text-left"} ${smallHeight ? "caption2 " : "body1"}`}>
                Camp Wat Pa is a summer youth leadership program hosted annually on Labor Day weekend at Wat Padhammachart in La Puente, California. We are dedicated to empowering and nurturing the next generation of Thai-American community leaders. As the sole Thai youth leadership camp in the entire United States, we take pride in our role as a catalyst for positive change, aiming to shape the future of our community.
                </p>
              </Grid>
              <Grid item xs={smallHeight ? 6 : 5} md={6} minHeight={{ xs: 0 }}>
                <p className={`font-family-secondary mb-ba text-dark ${xsScreen ? "h2 text-center" : "h1 text-left"}`}>Our Mission</p>
                <Box className={`bg-dark mb-xxl ${xsScreen ? "mx-auto" : ""}`} height="2px" width="4rem" />
                <p className={`text-weight-400 text-dark ${xsScreen ? "text-center" : "text-left"} ${smallHeight ? "caption2 " : "body1"}`} style={{ marginBottom: "20px" }}>
                  Our mission is to create an enriching and inclusive environment, where young adults from the Thai-American community can come together to share their experiences, wisdom, and passion with the emerging generation of Thai youth. Through a series of inspirational workshops and activities, we strive to instill in our campers the values of leadership, community involvement, and individual growth.
                </p>
                <p className={`text-weight-400 text-dark ${xsScreen ? "text-center" : "text-left"} ${smallHeight ? "caption2 " : "body1"}`} style={{ marginBottom: "20px" }}>
                  Our commitment to building strong community leaders extends beyond the camp experience. We encourage our campers to apply the skills and knowledge gained during their time at Camp Wat Pa to actively contribute to their local communities, fostering a sense of responsibility and service to others. Through collaboration, mentorship, and cultural celebration, we forge lasting connections that transcend geographical boundaries, uniting Thai-American youth in their shared heritage and aspirations. 
                </p>
                <p className={`text-weight-400 text-dark ${xsScreen ? "text-center" : "text-left"} ${smallHeight ? "caption2 " : "body1"}`} style={{ marginBottom: "20px" }}>
                  Camp Wat Pa envisions a future where our graduates become advocates for positive change, inspiring others to follow in their footsteps as leaders in their own right. Together, we strive to build a thriving community of compassionate, skilled, and culturally grounded individuals who will lead with integrity and make a lasting impact on society. 
                </p>
                <p className={`text-weight-400 text-dark ${xsScreen ? "text-center" : "text-left"} ${smallHeight ? "caption2 " : "body1"}`} style={{ marginBottom: "20px" }}>
                  Camp Wat Pa is more than just a camp; it is a transformative journey that empowers Thai-American youth to embrace their potential and shape a brighter future for generations to come.
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
                  <img className="mission-image" src={MissionAImage} alt="Many Campers enjoying popsicles" loading="lazy" />
                </Grid>
                <Grid item sm={6} display={{ xs: "none", mobile: "none", sm: "flex" }}>
                  <img className="mission-image" src={MissionBImage} alt="Camper throwing a dodgeball" loading="lazy" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={4} display={{ xs: "none", mobile: "none", sm: "none", md: "flex" }}>
              <img className="mission-image-right" src={MissionCImage} alt="Two campers sitting" loading="lazy" />
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
}
