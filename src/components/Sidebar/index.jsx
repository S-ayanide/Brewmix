import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import Vibe from "../Vibe";
import "./styles.css";

const Sidebar = ({ setMood }) => {
  const menuOpen = useStoreState((state) => state.menuOpen);
  const handleMoodChange = (mood) => {
    setMood(mood);
  };

  const setMenuOpen = useStoreActions((actions) => actions.setMenuOpen);

  return (
    <div>
      <div className="mood desktop">
        <div className="sidebar-header">Choose Mood</div>
        <ul className="sidebar-menu">
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange("reading")}
          >
            📚&nbsp;&nbsp;&nbsp;Reading
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange("coding")}
          >
            💻&nbsp;&nbsp;&nbsp;Coding
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange("bollywood")}
          >
            🎶&nbsp;&nbsp;&nbsp;Bollywood
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange("night time")}
          >
            🌘&nbsp;&nbsp;&nbsp;Night Time
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange("jazzy")}
          >
            🎺&nbsp;&nbsp;&nbsp;Jazzy
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange("early morning")}
          >
            🌅&nbsp;&nbsp;&nbsp;Early Morning
          </li>
        </ul>
      </div>
      {menuOpen && (
        <div className="mobile mood-mb">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="sidebar-header">Choose Mood</div>
            <img
              alt="close"
              onClick={() => setMenuOpen(false)}
              style={{ height: "1.5rem", width: "1.5rem", marginRight: "2rem" }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABqUlEQVRoge2aQVLCMBSGq3eQoXgkPIIXgDXqAfBaeAFd2YX3sC5g9bnoUzvSpnkvTdph8m/oDC/h+yY0SQlFkZOTYwpwBxyAL6ZPTcOy1ko8Twzuyl4zEgBHYAeUlhEdM0AJPAgT+IwM8CLFuwSMqgCPwnbwKa6leJmATRVgKWyfPsUAJOAypY/vegqYGMkic0sWmVuCRYANsAhovwA2oRxdHXtPv8BWyiuLjEhU0sd2VD6lyA3wLk0+NNuZjrZeC3AUkR6gQRmrhIrPsrJrZEIkVHzWLYqPTKiEis8q0gNaOt4zbUqTiEj7M5mxJFR8oSLSR3tarf5dm9ccFd8YItJPexSCR2KIL/UW5SrZJ+Wv1l/7sxu7awII6D++iGt2GksmuohLwlGjlokq4iPhqFXJRBPRSDjaaHbN44tYJBxtvWRiiVzGg5XUJ33UjXqzp0wfX/4VZW7JInPLRYvURdEcdyVmGQxwK5dnBz1dIq/yeh+NyJ4fprfBSmAtU/WR5sxuFZdtOMAKeAJOwuZ3TA3smW/8jqdbMmuaQ/p6oOMUsf1hICcn5zffPWVyp2Df1jYAAAAASUVORK5CYII="
            />
          </div>
          <ul className="sidebar-menu">
            <li
              className="sidebar-menu-item"
              onClick={() => handleMoodChange("reading")}
            >
              📚&nbsp;&nbsp;&nbsp;Reading
            </li>
            <li
              className="sidebar-menu-item"
              onClick={() => handleMoodChange("coding")}
            >
              💻&nbsp;&nbsp;&nbsp;Coding
            </li>
            <li
              className="sidebar-menu-item"
              onClick={() => handleMoodChange("bollywood")}
            >
              🎶&nbsp;&nbsp;&nbsp;Bollywood
            </li>
            <li
              className="sidebar-menu-item"
              onClick={() => handleMoodChange("night time")}
            >
              🌘&nbsp;&nbsp;&nbsp;Night Time
            </li>
            <li
              className="sidebar-menu-item"
              onClick={() => handleMoodChange("jazzy")}
            >
              🎺&nbsp;&nbsp;&nbsp;Jazzy
            </li>
            <li
              className="sidebar-menu-item"
              onClick={() => handleMoodChange("early morning")}
            >
              🌅&nbsp;&nbsp;&nbsp;Early Morning
            </li>
          </ul>
          <Vibe />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
