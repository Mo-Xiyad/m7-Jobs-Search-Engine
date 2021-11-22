// import {} from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./home.css";
import SearchBar from "../search-Bar/SearchBar";
import { useEffect } from "react";

export default function Home({ data, getSearchedData }) {
  useEffect(() => {}, [data]);
  return (
    <div className="container h-100">
      <SearchBar getSearchedData={getSearchedData} />
      <div className="container mt-5">
        {data.data &&
          data.data.map((result, i) => (
            <div className="row" key={i}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="well search-result">
                  <div className="col-xs-6 col-sm-9 col-md-9 col-lg-10 title">
                    <Link to={`jobLists/${result.company_name}`}>
                      <h3>{result.title}</h3>
                      {/* <h3>{result._id}</h3> */}
                    </Link>
                    <p>
                      Ut quis libero id orci semper porta ac vel ante. In nec
                      laoreet sapien. Nunc hendrerit ligula at massa sodales,
                      ullamcorper rutrum orci semper.
                    </p>
                  </div>
                  <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                    <div>
                      <small>
                        Company: <strong> {result.company_name}</strong>
                      </small>
                    </div>
                    <div>
                      <small>
                        Location:{" "}
                        <strong> {result.candidate_required_location}</strong>{" "}
                      </small>
                    </div>
                    <div>
                      <small>
                        Job Type: <strong> {result.job_type}</strong>{" "}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
