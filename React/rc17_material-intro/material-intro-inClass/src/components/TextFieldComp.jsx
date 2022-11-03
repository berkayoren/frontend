import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Box from "@mui/material/Box";

const TextFieldComp = () => {
  const [error, setError] = useState(false);

  return (
    <div>
      <Container>
        <Typography variant="h4" color="error" align="center" mt={4}>
          TEXT FIELD
        </Typography>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <TextField
            margin="dense"
            id="email"
            label="Email"
            placeholder="Enter your email"
            fullWidth
            error={error}
            helperText={error && "Incorrect email format"}
          />
        </Box>
        <Box sx={{ mt: 4 }}>
          <TextField
            margin="normal"
            id="password"
            label="Password"
            placeholder="Enter your passWord"
            fullWidth
            error={error}
            helperText={error && "Incorrect password"}
          />
          <Button variant="contained" color="warning" sx={{ mt: 4 }}>
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
