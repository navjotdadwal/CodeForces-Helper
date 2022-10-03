import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage/loginPage';
import AboutPage from './pages/AboutPage/aboutPage';
import ContactPage from './pages/ContactPage/contactPage';
import ContestPage from "./pages/ContestPage/contestPage";
import UpSolvePage from "./pages/UpSolvePage/upsolvePage";
import FriendsPage from "./pages/FriendsPage/friendsPage";
import ProblemsPage from "./pages/ProblemsPage/problemsPage";
import RecentSubmissionPage from "./pages/RecentSubmissionPage/recentSubmissionPage";
import StatisticsPage from "./pages/StatisticsPage/statisticsPage";
import NoPage from './pages/NoPage/noPage';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/contests/:user" element={<ContestPage />} />
        <Route exact path="/upsolve/:user" element={<UpSolvePage />} />
        <Route exact path="/problems/:user" element={<ProblemsPage />} />
        <Route exact path="/friends/:user" element={<FriendsPage />} />
        <Route exact path="/recentsubmissions/:user" element={<RecentSubmissionPage />} />
        <Route exact path="/statistics/:user" element={<StatisticsPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;