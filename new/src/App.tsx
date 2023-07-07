import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "primereact/resources/primereact.css"; // core css
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css"; // css utility

const Login = lazy(() => import("./pages/Login/Login"));
const Home = lazy(() => import("./pages/Home/Home"));
const PatientDashboard = lazy(() => import("./pages/Home/PatientDashboard"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Connecting to the server...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<PatientDashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
