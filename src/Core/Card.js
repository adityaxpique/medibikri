import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="upper-sec">
            <div className="contentBx">
              <h3>Name: {props.name}</h3>
              <h3>Status : {props.status}</h3>
            </div>

            <div className="imgBx">
              <h2>{props.details.substring(0, 300)} ...</h2>
            </div>
          </div>
          
          <div className="lower-sec">
            <div className="btnBx">
              <div className="launch-btns">
              <hr className="linee"/>
                <div>
                  {props.launches && props.launches.length > 0 ? (
                    <p className="boldd">Launches </p>
                  ) : (
                    <p className="boldd"> No Launches</p>
                  )}
                </div>
                <div className="launchlist">
                  {props.launches &&
                    props.launches.map((lch, index) => {
                      if (index < 3) {
                        return (
                          <span>
                            <Link to={`/details/${lch}`}>{lch}</Link>
                          </span>
                        );
                      }
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
