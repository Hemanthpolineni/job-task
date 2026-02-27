import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import AddJob from "./pages/AddJob"
import DeleteJob from "./pages/DeleteJob";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/add" element={<AddJob />} />
        <Route path="/jobs/delete/:id" element={<DeleteJob/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;