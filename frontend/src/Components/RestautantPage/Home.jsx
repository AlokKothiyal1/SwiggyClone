import React from "react";
import Navigator from "./Navigator";
import Promotions from "./Promotions";
import SideMenu from "./SideMenu";
import HotelCard from "./HotelCard";
import Sidebar from "./Sidebar";
import HomeDummy from "./HomeDummy";
const data = require("../../utils/data.json");

// console.log(data.current);

function Home() {
  return (
    <div>
      <Navigator />
      <HomeDummy />
    </div>
  );
}

export default Home;
