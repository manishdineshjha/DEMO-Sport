"use client";

import { DarkModeContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import React from "react";
import Switch from "react-switch";
const Toggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleToggle = () => {
    toggleDarkMode();
    // Add or remove .bg-dark class based on dark mode state
    if (darkMode) {
      document.body.classList.add("bg-dark");
      document.body.classList.add("bg-dark-secondary");
      document.body.classList.remove("bg-light");
      document.body.classList.remove("bg-light-secondary");
    } else {
      document.body.classList.remove("bg-dark");
      document.body.classList.remove("bg-dark-secondary");
      document.body.classList.add("bg-light");
      document.body.classList.add("bg-light-secondary");
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark");
      document.body.classList.add("bg-dark-secondary");
      document.body.classList.remove("bg-light");
      document.body.classList.remove("bg-light-secondary");
    } else {
      document.body.classList.remove("bg-dark");
      document.body.classList.remove("bg-dark-secondary");
      document.body.classList.add("bg-light");
      document.body.classList.add("bg-light-secondary");
    }
  }, [darkMode]);
  return (
    <div className="flex items-center gap-2">
      Dark Mode
      <Switch
        onChange={handleToggle}
        checked={darkMode}
        onColor="#000"
        offColor="#ccc"
        uncheckedIcon={false}
        checkedIcon={false}
        checkedHandleIcon={
          <span style={{ color: "#000", fontSize: "10px", marginLeft: "4px" }}>
            ON
          </span>
        }
        uncheckedHandleIcon={
          <span style={{ color: "#000", fontSize: "10px", marginLeft: "4px" }}>
            OFF
          </span>
        }
      />
    </div>
  );
};

export default Toggle;
