import { Button } from "react-bootstrap";
import React from "react";
import "./home.css";
export default function Home() {
  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <input
            className="search_input"
            type="text"
            name
            placeholder="Search..."
          />
          <Button className="search_icon">
            <i className="fas fa-search" />
          </Button>
        </div>
      </div>
    </div>
  );
}
