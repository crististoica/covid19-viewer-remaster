import { useState } from "react";
import { IconButton, Tooltip } from "@material-ui/core";

import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness3Icon from "@material-ui/icons/Brightness3";

const ToggleDarkMode = ({ setDarkMode, darkMode, classes }) => {
  const [switchState, setSwitchState] = useState({
    light: !darkMode,
    dark: darkMode,
  });

  const tooltipTitle = darkMode ? "Light Mode" : "Dark Mode";
  const handleSwitchChange = (e) => {
    setSwitchState({ ...switchState, [e.target.name]: e.target.checked });
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className={classes.iconWText}>
      <Tooltip title={tooltipTitle}>
        <IconButton onClick={handleSwitchChange}>
          {darkMode ? (
            <Brightness7Icon color="primary" />
          ) : (
            <Brightness3Icon color="primary" />
          )}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default ToggleDarkMode;
