import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Work from "./components/Work";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Profile />}
        />

        <Route
          path="/skills"
          element={<Skills />}
        />

        <Route
          path="/work"
          element={<Work />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;