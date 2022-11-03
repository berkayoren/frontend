import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        {/* h4 görünümlü h6 */}
        <Typography
          variant="h4"
          component="h6"
          align="center"
          mt={4}
          color="primary"
        >
          MUI Typography
        </Typography>

        <Typography
          variant="body2"
          align="justify"
          mt={4}
          sx={{ background: "lightgreen", color: "#eee", fontSize: "1.4rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ab recusandae ea sequi nisi labore illum error! Temporibus magnam
          dolorum sunt est, vero quisquam provident sequi veritatis assumenda
          quod voluptas?
        </Typography>
        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          distinctio harum ex officiis tempore! Architecto ad illo eos
          doloribus, praesentium consequuntur labore eveniet officiis,
          reprehenderit ab voluptate aut deleniti ducimus!
        </Typography>
      </Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            width: "50%",
            alignItems: "center",
            margin: "auto ",
          }}
        >
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
