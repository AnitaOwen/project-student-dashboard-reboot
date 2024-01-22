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
  
  // this is the list of all cohorts
  let cohortsList = []
  allStudents.filter((student) => {
    if(!cohortsList.includes(student.cohort.cohortCode)){
      cohortsList.push(student.cohort.cohortCode)
    }
  })
  // console.log(cohortsList)

  // this is where we format each cohort title.
  const formattedCohortsList = cohortsList.map((cohort) => {
    const cohortTitleArray = cohort.split("")
    const season = cohortTitleArray.filter((char) => isNaN(+char) === true).join("")
    const year = cohortTitleArray.filter((char) => isNaN(+char) === false).join("")
    return `${season} ${year}`
  })
  // console.log(formattedCohortsList)


  // this is where we sort the formatted cohort titles.
  let sortedFormattedCohortsList = formattedCohortsList.sort((a, b)=> {
    const [seasonA, yearA] = a.split(' ')
    const [seasonB, yearB] = b.split(' ')
    if(yearA !== yearB){
      return parseInt(yearA) - parseInt(yearB)
    }
    const seasonsOrder = ["Winter", "Spring", "Summer", "Fall"]
    return seasonsOrder.indexOf(seasonA) - seasonsOrder.indexOf(seasonB)

  })
  // console.log(sortedFormattedCohortsList)


  //  this is where we sort by ascending or dedscending.
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
        
        {isReversed ? [...formattedCohortsList].reverse().map((cohort) => (
          <li key={cohort} onClick={()=>handleOnClick(cohort.replace(" ", ""))}>
            <Link to={`/students/${cohort.replace(" ", "")}`}>{cohort}</Link>
          </li>
        )) :
        formattedCohortsList.map((cohort) => (
          <li key={cohort} onClick={()=>handleOnClick(cohort.replace(" ", ""))}>
            <Link to={`/students/${cohort.replace(" ", "")}`}>{cohort}</Link>
          </li>
          ))}
      </ul>
    </div>
  );
};

export default Aside;
