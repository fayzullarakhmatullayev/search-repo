import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

const App: React.FC = () => {
  console.log(import.meta.env.VITE_GITHUB_TOKEN);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:id" element={<DetailPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
