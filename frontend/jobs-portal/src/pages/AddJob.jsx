import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { addJob } from "../services/jobService";

function AddJob() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    position: "",
    experience: "",
    location: "",
    team: "",
    type: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addJob(formData);
      navigate("/jobs"); 
    } catch (err) {
      const message = err.response?.data?.detail || "Failed to add job";
      setError(message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Add New Job
        </Typography>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Position"
            name="position"
            fullWidth
            margin="normal"
            value={formData.position}
            onChange={handleChange}
            required
          />

          <TextField
            label="Experience"
            name="experience"
            fullWidth
            margin="normal"
            value={formData.experience}
            onChange={handleChange}
            required
          />

          <TextField
            label="Location"
            name="location"
            fullWidth
            margin="normal"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <TextField
            label="Team"
            name="team"
            fullWidth
            margin="normal"
            value={formData.team}
            onChange={handleChange}
            required
          />

          <TextField
            label="Type"
            name="type"
            fullWidth
            margin="normal"
            value={formData.type}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
          >
            Add Job
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default AddJob;