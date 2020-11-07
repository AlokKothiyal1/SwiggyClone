import React from "react";
import Navigator from "./Navigator";
import Promotions from "./Promotions";
import SideMenu from "./SideMenu";

function Home() {
  return (
    <div>
      <Navigator />
      <Promotions />
      <SideMenu />
    </div>
  );
}

export default Home;
