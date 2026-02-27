import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { delJob } from "../services/jobService";

function DeleteJob() {
  const { id } = useParams();   // Get ID from URL
  const navigate = useNavigate();

  useEffect(() => {
    const handleDelete = async () => {
      try {
        await delJob(id);
        alert("Job deleted successfully");
        navigate("/jobs");
      } catch (error) {
        console.error("Error deleting job:", error);
        alert("Job not found or error occurred");
      }
    };

    handleDelete();
  }, [id, navigate]);

  return (
    <div>
      <h2>Deleting Job...</h2>
      <p>Please wait while we process your request.</p>
    </div>
  );
}

export default DeleteJob;