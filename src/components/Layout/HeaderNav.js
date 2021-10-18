import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export function HeaderNav() {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);
  const history = useHistory();
  const handleChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <>
      <Tabs defaultActiveKey={value} onChange={handleChange}>
        {/* <Link to={"/home"}> */}
        <TabPane tab="Home" key="/home"></TabPane>
        {/* </Link> */}
        {/* <Link to={"/add-house"}> */}
        <TabPane tab="Add House" key="/add-house"></TabPane>
        <TabPane tab="Favorites" key="/favorites"></TabPane>
        {/* </Link> */}
      </Tabs>
    </>
  );
}
