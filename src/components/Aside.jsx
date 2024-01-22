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
    // filter out characters that are not numbers (season)
    const season = cohortTitleArray.filter((char) => isNaN(+char) === true).join("")
    // filter out characters that are numbers (year)
    const year = cohortTitleArray.filter((char) => isNaN(+char) === false).join("")
    return `${season} ${year}`
  })
  // console.log(formattedCohortsList)


  // this is where we sort the formatted cohort titles.
  let sortedFormattedCohortsList = formattedCohortsList.sort((a, b)=> {
    // destructure season and year to compare.
    const [seasonA, yearA] = a.split(' ')
    const [seasonB, yearB] = b.split(' ')
    if(yearA !== yearB){
      return parseInt(yearA) - parseInt(yearB)
    }
    // set an order to compare the seasons to.
    const seasonsOrder = ["Winter", "Spring", "Summer", "Fall"]
    return seasonsOrder.indexOf(seasonA) - seasonsOrder.indexOf(seasonB)
  })
  // console.log(sortedFormattedCohortsList)


  //  this is where we sort cohort list by ascending or descending.
  function handleSort(){
    setIsReversed(!isReversed)
  }

  return (
    <div className="aside">
      {/* this is the button that toggles the sorting of the cohort list. */}
      <button onClick={handleSort}>
        {isReversed ? "Sort Ascending by Year" : "Sort Descending by Year"}
      </button>
      
      <ul className="sidebar">
        {/* this is the link to All Students */}
        <li><Link to="/students" onClick={()=> handleOnClick("All Students")} className="cohort-list-item" >All Students</Link></li>
        
        {/* if isReversed === true, display reversed sorted formatted cohort list. Otherwise, display sorted formatted cohort list. */}
        {isReversed ? [...sortedFormattedCohortsList].reverse().map((cohort) => (
          // handleOnClick(cohort) sets the selectedCohort state in App.jsx.
          <li key={cohort} onClick={()=>handleOnClick(cohort.replace(" ", ""))}>
            {/* this is the link to each cohort */}
            <Link to={`/students/${cohort.replace(" ", "")}`} className="cohort-list-item">{cohort}</Link>
          </li>
        )) :
        sortedFormattedCohortsList.map((cohort) => (
          // handleOnClick(cohort) sets the selectedCohort state in App.jsx.          
          <li key={cohort} onClick={()=>handleOnClick(cohort.replace(" ", ""))}>
            {/* this is the link to each cohort */}
            <Link to={`/students/${cohort.replace(" ", "")}`} className="cohort-list-item">{cohort}</Link>
          </li>
          ))}
      </ul>
    </div>
  );
};

export default Aside;
