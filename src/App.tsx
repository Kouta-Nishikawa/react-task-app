import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import TaskLinkPage from "./pages/task/taskLinkPage";

function App () {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/task" element={<TaskLinkPage />} /> {}
    </Routes>
  );
}

export default App;
