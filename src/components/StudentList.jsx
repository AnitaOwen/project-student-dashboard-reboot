import Student from "./Student";
import { useState } from "react";


const StudentList = ({allStudents, selectedCohort}) => {
  const [searchInput, setSearchInput] = useState("")

  function filterStudents(){
    return allStudents.filter((student)=> {
      const name = student.names
      const firstName = name.preferredName
      const lastName = name.surname
      const firstNameMatch = firstName.toLowerCase().match(searchInput.toLowerCase())
      const lastNameMatch = lastName.toLowerCase().match(searchInput.toLowerCase())
      return firstNameMatch || lastNameMatch
    })
  }
  
  function handleTextChange(event){
    const input = event.target.value
    setSearchInput(input)
  }
  
  function handleCancel(){
    setSearchInput("")
  }

  const searchResults = filterStudents()
  
  const count = allStudents.length
  let cohortTitle;
  if(selectedCohort){
    const titleArray = selectedCohort.split("")
    const season = titleArray.filter((char) => isNaN(+char) === true).join("")
    const year = titleArray.filter((char) => isNaN(+char) === false).join("")
    cohortTitle = `${season} ${year}`
  }
  return (
    <main>
      <div>
        <form>
          <label htmlFor="searchInput">Search by first or last name</label>
          <input 
          type="search"
          id="searchInput"
          onChange={handleTextChange}
          value={searchInput} 
          />
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      </div>

      <div>
        {searchResults.length > 0 ? (
          searchResults.map((result)=>(
            <Student key={result.id} student={result} />
          ))) : (
          <p>No students with the name "{searchInput}" found in this list.</p>
        )}

      </div>
      <div>
        {searchInput.length === 0 && (
          <>
            <h2>{selectedCohort ? cohortTitle : "All Students"} ({count})</h2>
            <div>
              {allStudents.map((student) => (
              <Student key={student.id} student={student} />
              ))}
            </div> 
          </>
        )} 
      </div>
      {/* <h2>{selectedCohort ? cohortTitle : "All Students"} ({count})</h2>
      <div>
        {allStudents.map((student) => (
      <Student key={student.id} student={student} />
      ))}
      </div> */}
    </main>
  )
}

export default StudentList