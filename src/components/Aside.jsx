import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Aside.css"

const Aside = ({ allStudents, handleOnClick }) => {
  const [isReversed, setIsReversed] = useState(false)

  // let cohortsList = [
  //   "Winter 2025", 
  //   "Spring 2025",
  //   "Summer 2025",
  //   "Fall 2025",
  //   "Winter 2026",
  //   "Spring 2026",
  //   "Summer 2026",
  //   "Fall 2026",
  // ]
  
  let cohortsList = []
  allStudents.filter((student) => {
    if(!cohortsList.includes(student.cohort.cohortCode)){
      cohortsList.push(student.cohort.cohortCode)
    }
  })
  // console.log(cohortsList)


  function handleSort(){
    setIsReversed(!isReversed)
  }

  return (
    <div className="aside">
      <button onClick={handleSort}>
        {isReversed ? "Sort Ascending by Year" : "Sort Descending by Year"}
      </button>
      
      <ul className="sidebar">
        <li><Link to="/students" onClick={()=> handleOnClick("All Students")}>All Students</Link></li>
        
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
      </ul>
    </div>
  );
};

export default Aside;
