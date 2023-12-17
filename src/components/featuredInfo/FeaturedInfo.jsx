import React from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <>
      <div className="addmin_topbar">
        <div className="addmin_topbar_wrapper">
          <div>
            <div className="Title">
              <span>
                {" "}
                <PersonPinIcon />
              </span>
              <span>Students</span>
            </div>
          </div>
          <div>
            <Button variant="contained" disableElevation>
              <span>
                <AddIcon />
              </span>
              <span>Add Student</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="table_container">
        <div className="addmin_tabel_wrapper">
          <ul className="tableItemMain">
            <li>ID</li>
            <li>Profile Img</li>
            <li>Name</li>
            <li>Course Name</li>
            <li>Password</li>
          </ul>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              width: "10%",
              justifyContent: "space-between",
            }}
          >
            <li>ID</li>
            <li>ID</li>
          </ul>
        </div>

        <div></div>
      </div>

      <div className="studentsDetails_container">
        <div className="studentsDetails_wrapper">
          <ul className="tableItemMain">
            <li>1</li>
            <li>
              <SentimentSatisfiedAltIcon />
            </li>
            <li>Muhammad Mutahir</li>
            <li>Web an App</li>
            <li>123456</li>
          </ul>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              width: "10%",
              justifyContent: "space-between",
            }}
          >
            <li>
              <DriveFileRenameOutlineIcon />
            </li>
            <li>
              <RemoveRedEyeIcon />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FeaturedInfo;
