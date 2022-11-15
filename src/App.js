import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Homepage from "./main/Homepage";
import DepartmentPage from "./main/DepartmentPage";
import ProfilePage from "./main/ProfilePage";
import CSE from "./main/Departments/CSE";
import IT from "./main/Departments/IT";
import AIDS from "./main/Departments/AIDS";

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/departments" element={<DepartmentPage />} />
        <Route path="/department/cse" element={<CSE />} />
        <Route path="/department/it" element={<IT />} />
        <Route path="/department/aids" element={<AIDS />} />
        <Route path="/alumni/:id" element={<ProfilePage />} />
      </Routes>
    </div>
  </Router>
);
export default App;
