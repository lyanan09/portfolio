import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));

const AppRoutes = () => (
  <Router basename="/portfolio">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default AppRoutes;
