import React, { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import Card from "./Card";
import Intro from "../Core/Intro";

const Main = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get("https://api.spacexdata.com/v4/launchpads")
      .then((response) => {
        const myData = response.data;
        console.log(myData);
        setData(myData);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="maintop">
      <div className="intro-main">
        <Intro />
      </div>

      <div className="list">
        {data &&
          data.map((lp) => {
            console.log(lp);
            return (
              <div className="card-render">
                <Card
                  name={lp.name}
                  status={lp.status}
                  details={lp.details}
                  launches={lp.launches}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Main;
