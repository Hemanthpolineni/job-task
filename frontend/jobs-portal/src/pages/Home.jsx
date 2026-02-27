import { useEffect, useState } from "react";
import { getHome } from "../services/jobService";
import { Box, Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const data = await getHome();
      setMessage(data.message);
    };
    fetchMessage();
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", py: 8 }}>
      <Container>
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          {message}
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to="/jobs"
          sx={{ mt: 3 }}
        >
          View All Jobs
        </Button>
      </Container>
    </Box>
  );
}

export default Home;