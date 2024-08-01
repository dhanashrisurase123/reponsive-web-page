import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import List from "./Pages/List-page/List";
import Insert from "./Pages/Insert-page/Insert";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Login from "./modules/login/login";

const App = () => {
  const [currentText, setCurrentText] = useState("Dashboard");

  const handleTextChange = (text) => {
    setCurrentText(text);
  };

  const onProjectSave = (project) => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.push(project);
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  const MainLayout = ({ children }) => (
    <div className="app-container">
      <Sidebar onTextChange={handleTextChange} />
      <div className="main-content">
        <Navbar currentText={currentText} />
        {children}
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/list"
          element={
            <MainLayout>
              <List />
            </MainLayout>
          }
        />
        <Route
          path="/insert"
          element={
            <MainLayout>
              <Insert onProjectSave={onProjectSave} />
            </MainLayout>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
