import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobs, getLimitedJobs } from "../services/jobService";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


function Jobs() {
  const [searchParams] = useSearchParams();
  const limit = searchParams.get("limit");
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;

        if (limit) {
          data = await getLimitedJobs(limit);
        } else {
          data = await getJobs();
        }

        setJobs(data);
      }catch (err) 
        {
          const message = err.response?.data?.detail || "Something went wrong";
          setError(message);
        }
    };

    fetchData();
  }, [limit]);

  return (
    <Box sx={{ minHeight: "100vh", py: 8 }}>
      <Container>
        <Typography
          variant="h3"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          Current Opportunities
        </Typography>
       
        {error && <Typography color="error">{error}</Typography>}

        <Grid container spacing={4} mt={2}>
          {jobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography fontWeight="bold" mb={1}>
                    {job.position}
                  </Typography>

                  <Typography mb={1}>
                    <strong>Experience:</strong> {job.experience}
                  </Typography>

                  <Typography mb={1}>
                    <strong>Location:</strong> {job.location}
                  </Typography>

                  <Typography mb={1}>
                    <strong>Team:</strong> {job.team}
                  </Typography>

                  <Typography mb={2}>
                    <strong>Type:</strong> {job.type}
                  </Typography>

                  <Button variant="contained" fullWidth>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Jobs;