import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Aside = ({ handleOnClick }) => {
  const [isReversed, setIsReversed] = useState(false)

  let cohortsList = [
    "Winter 2025", 
    "Spring 2025",
    "Summer 2025",
    "Fall 2025",
    "Winter 2026",
    "Spring 2026",
    "Summer 2026",
    "Fall 2026",
  ]

  function handleSort(){
    setIsReversed(!isReversed)
  }

  return (
    <div>
      <button onClick={handleSort}>
        {isReversed ? "Sort Ascending by Year" : "Sort Descending by Year"}
      </button>
      
      <ul className="sidebar">
        <li><Link to="/students">All Students</Link></li>
        
        {isReversed ? [...cohortsList].reverse().map((cohort) => (
          <li key={cohort} onClick={()=>handleOnClick(cohort.replace(" ", ""))}>
            <Link to={`/students/${cohort.replace(" ", "")}`}>{cohort}</Link>
          </li>
        )) :
        cohortsList.map((cohort) => (
          <li key={cohort} onClick={()=>handleOnClick(cohort.replace(" ", ""))}>
            <Link to={`/students/${cohort.replace(" ", "")}`}>{cohort}</Link>
          </li>
          ))}

        {/* <li onClick={() => handleOnClick("Winter2025")}>
          <Link to="/students/Winter2025">Winter 2025</Link>
        </li>

        <li onClick={() => handleOnClick("Spring2025")}>
          <Link to="/students/Spring2025">Spring 2025</Link>
        </li>

        <li onClick={() => handleOnClick("Summer2025")}>
          <Link to="/students/Summer2025">Summer 2025</Link>
        </li>

        <li onClick={() => handleOnClick("Fall2025")}>
          <Link to="/students/Fall2025">Fall 2025</Link>
        </li>
        <li onClick={() => handleOnClick("Winter2026")}>
          <Link to="/students/Winter2026">Winter 2026</Link>
        </li>

        <li onClick={() => handleOnClick("Spring2026")}>
          <Link to="/students/Spring2026">Spring 2026</Link>
        </li>

        <li onClick={() => handleOnClick("Summer2026")}>
          <Link to="/students/Summer2026">Summer 2026</Link>
        </li>

        <li onClick={() => handleOnClick("Fall2026")}>
          <Link to="/students/Fall2026">Fall 2026</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Aside;
