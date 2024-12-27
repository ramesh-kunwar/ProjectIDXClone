import { Routes, Route } from "react-router-dom";
import CreateProject from "./pages/CreateProject";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreateProject />} />
      </Routes>
    </>
  );
};

export default App;
