import {Route, Routes } from "react-router-dom";
import "./App.css";
import Error404 from "./pages/404";
import Home from "./pages/home";
import EditPage from "./pages/edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/edit" element={<EditPage />}></Route>
      <Route
        path="*"
        element={
          <>
            <Error404 />
          </>
        }
      />
    </Routes>
  );
}
export default App;
