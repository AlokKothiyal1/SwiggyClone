import React from "react";
import Navigator from "./Navigator";
import Promotions from "./Promotions";
import SideMenu from "./SideMenu";
import HotelCard from "./HotelCard";
import Sidebar from "./Sidebar";
const data = require("../utils/data.json");
// console.log(data.current);

function Home() {
  return (
    <div>
      <Navigator />
      <Promotions />
      <SideMenu />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <div className="row row-cols-3 justify-content-center">
              {data.current.map((item) => (
                <HotelCard data={item} key={item._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
