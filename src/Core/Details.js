import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = (props) => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get(`https://api.spacexdata.com/v4/launches/${id}`)
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
    <div className="details-god">
      <div className="details-subsec">
        <div className="launch-div">
          <span className="launch-namebg">NAME</span>
          <p className="launch-name">{data.name}</p>
        </div>
        <div className="extra-divv">
          {/* <div className="details-div">
            <p className="launch-details">
              DETAILS :
              {data.details == null ? (
                <span> Not Available</span>
              ) : (
                <span> {data.details}</span>
              )}
            </p>
          </div>

          <p className="launch-date">DATE : {data.date_local}</p>
          <div className="reused-div">
            {" "}
            REUSED :
            {data &&
              data.cores &&
              data.cores.length > 0 &&
              data.cores.map((cr) => {
                if (cr.reused) {
                  return <span className="launch-reused"> Reused</span>;
                } else {
                  return <span className="launch-reused"> Not Reused</span>;
                }
              })}
          </div> */}
          <table>
            <tr>
              <th>DETAILS</th>
              <td>
                {data.details == null ? (
                  <span> Not Available</span>
                ) : (
                  <span> {data.details}</span>
                )}
              </td>
            </tr>
            <br/>
            <tr>
              <th>DATE</th>
              <td>{data.date_local}</td>
            </tr>
            <br/>
            <tr>
              <th>REUSED</th>
              <td>
                {data &&
                  data.cores &&
                  data.cores.length > 0 &&
                  data.cores.map((cr) => {
                    if (cr.reused) {
                      return <span className="launch-reused"> Reused</span>;
                    } else {
                      return <span className="launch-reused"> Not Reused</span>;
                    }
                  })}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Details;
