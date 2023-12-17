import React from "react";
import "./sidebar.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  GanttChartSquare,
  LineChart,
  TrendingUp,
  User,
  Store,
  DollarSign,
  BarChart4,
  Mail,
  Computer,
  MessageCircle,
  FolderKanban,
  AlertOctagon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link
              style={{ textDecoration: "none", color: "#555555" }}
              to="/"
              className="link"
            ></Link>
            <li className="sidebarListItem">
              <span>
                <PermIdentityIcon />
              </span>{" "}
              Students
            </li>
            <li className="sidebarListItem">
              <span>
                <PersonPinIcon />
              </span>
              Attendance
            </li>
          </ul>
        </div>

        <div>
          <Button variant="outlined" >
            LOGOUT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
