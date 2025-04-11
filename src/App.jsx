import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TrackProgress from "./pages/TrackProgress";
import StartTraining from "./pages/StartTraining";
import SimulationModule from "./pages/SimulationModule";
import FeedbackSupport from "./pages/FeedbackSupport";
import ViewTasks from "./pages/ViewTasks";
import Phishing from "./pages/Phishing";
import Course from "./pages/Course";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/track-progress" element={<TrackProgress />} />
        <Route path="/start-training" element={<StartTraining />} />
        <Route path="/simulation-module" element={<SimulationModule />} />
        <Route path="/feedback-support" element={<FeedbackSupport />} />
        <Route path="/view-tasks" element={<ViewTasks />} />
        <Route path="/phishing" element={<Phishing />} />
        <Route path="/Course" element={<Course />} />
      </Routes>
    </Router>
  );
};

export default App;