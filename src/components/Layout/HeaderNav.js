import React from "react";
import { Tab, Tabs } from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";

export function HeaderNav() {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);
  const history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <div style={{ paddingRight: "20px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Home" {...a11yProps(0)} value="/home" />
        <Tab label="Form" {...a11yProps(1)} value="/form" />
      </Tabs>
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
