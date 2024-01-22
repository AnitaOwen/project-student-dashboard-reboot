import Student from "./Student";
import { useState } from "react";


const StudentList = ({ allStudents, selectedCohort }) => {
  const [searchInput, setSearchInput] = useState("")
  const [listView, setListView] = useState(false)
  
  // function to toggle list view
  function handleListView(){
    setListView(!listView)
  }

  // Search bar text input
  function handleTextChange(event){
    const input = event.target.value
    setSearchInput(input)
  }
  
  // filter names of matching students for search bar
  function filterStudents(){
    return allStudents.filter((student)=> {
      const name = student.names
      const firstNameMatch = name.preferredName.toLowerCase().match(searchInput.toLowerCase())
      const lastNameMatch = name.surname.toLowerCase().match(searchInput.toLowerCase())
      const middleNameMatch = name.middleName.toLowerCase().match(searchInput.toLowerCase())
      return firstNameMatch || lastNameMatch || middleNameMatch
    })
  }
  const searchResults = filterStudents()
  
  // the count of students prop
  const count = allStudents.length
  // console.log(count)

  // formats the cohort title with a space.
  let cohortTitle = ""
  if(selectedCohort && selectedCohort === "All Students"){
    cohortTitle = "All Students"
  } else if (selectedCohort && selectedCohort !== "All Students"){
    const titleArray = selectedCohort.split("")
    const season = titleArray.filter((char) => isNaN(+char) === true).join("")
    const year = titleArray.filter((char) => isNaN(+char) === false).join("")
    cohortTitle = `${season} ${year}`
  }

  return (
    <main>
      <div className="search-format">
        <form className="search bar">
          <label htmlFor="searchInput">
          Search {cohortTitle ? cohortTitle : "All Students"}:
          </label>
          <div>
          <input 
          placeholder="Student Name"
          type="search"
          id="searchInput"
          onChange={handleTextChange}
          value={searchInput} 
          />
          </div>
        </form>
      

      
        <button onClick={handleListView}>
          {listView ? "Switch to Normal View" : "Switch to List View"}
        </button>
      </div>
      
      <div>
        {searchInput === "" ? (
          <>
            <h2 className="cohort-name">{cohortTitle ? cohortTitle : "All Students"} ({count})</h2>
            <div className="student">
              {allStudents.map((student) => (
              <Student key={student.id} student={student} listView={listView} />
              ))}
            </div> 
          </>
        ): <div className="student">
        {searchResults.length > 0 ? (
          searchResults.map((result)=>(
            <Student key={result.id} student={result} listView={listView}/>
          ))) : (
          <p>No student with a name containing "{searchInput}" found in {cohortTitle}.</p>
        )}
      </div>} 
      </div>
     


    </main>
  )
}

export default StudentList