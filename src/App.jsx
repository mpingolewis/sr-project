import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TrackProgress from "./pages/TrackProgress";
import StartTraining from "./pages/StartTraining";
import SimulationModule from "./pages/SimulationModule";
import FeedbackSupport from "./pages/FeedbackSupport";
import ViewTasks from "./pages/ViewTasks";
import PhishingSimulation from "./pages/Phishing"; // Import the PhishingSimulation component

const App = () => {
    const [progress, setProgress] = useState(0);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home progress={progress} />} />
                <Route path="/track-progress" element={<TrackProgress />} />
                <Route path="/start-training" element={<StartTraining setProgress={setProgress} />} />
                <Route path="/simulation-module" element={<SimulationModule />} />
                <Route path="/feedback-support" element={<FeedbackSupport />} />
                <Route path="/view-tasks" element={<ViewTasks progress={progress} />} />
                <Route path="/phishing" element={<PhishingSimulation />} /> {/* Add the PhishingSimulation route */}
            </Routes>
        </Router>
    );
};

export default App;
