// import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChartBar,
//   faListAlt,
//   faPlus,
//   faSignOutAlt,
// } from "@fortawesome/free-solid-svg-icons";

// const Sidebar = ({ onTextChange }) => {
//   const handleItemClick = (text) => {
//     onTextChange(text);
//   };

//   return (
//     <div className="sidebar">
//       <ul className="sidebar-list">
//         <li onClick={() => handleItemClick("Dashboard")}>
//           <Link to="/dashboard">
//             <FontAwesomeIcon icon={faChartBar} />
//           </Link>
//         </li>
//         <li onClick={() => handleItemClick(" Project Listing")}>
//           <Link to="/list">
//             <FontAwesomeIcon icon={faListAlt} />
//           </Link>
//         </li>
//         <hr className="horizontal-line"></hr>
//         <li onClick={() => handleItemClick("Create project")}>
//           <Link to="/insert">
//             <FontAwesomeIcon icon={faPlus} />
//           </Link>
//         </li>
//         <li>
//           <Link to="/logout">
//             <FontAwesomeIcon icon={faSignOutAlt} />
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;





import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faListAlt,
  faPlus,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ onTextChange }) => {
  const handleItemClick = (text) => {
    onTextChange(text);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li onClick={() => handleItemClick("Dashboard")}>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faChartBar} />
          </Link>
        </li>
        <li onClick={() => handleItemClick("Project Listing")}>
          <Link to="/list">
            <FontAwesomeIcon icon={faListAlt} />
          </Link>
        </li>
        <hr className="horizontal-line"></hr>
        <li onClick={() => handleItemClick("Create project")}>
          <Link to="/insert">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
        </li>
        <li className="logout">
          <Link to="/logout">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
