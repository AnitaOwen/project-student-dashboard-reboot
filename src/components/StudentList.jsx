import Student from "./Student";
import { useState } from "react";


const StudentList = ({ allStudents, selectedCohort }) => {
  const [searchInput, setSearchInput] = useState("")
  const [listView, setListView] = useState(false)

  function handleTextChange(event){
    const input = event.target.value
    setSearchInput(input)
  }
  
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
  
  
  const count = allStudents.length// make as state
  // console.log(count)

  let cohortTitle = ""
  if(selectedCohort){
    const titleArray = selectedCohort.split("")
    const season = titleArray.filter((char) => isNaN(+char) === true).join("")
    const year = titleArray.filter((char) => isNaN(+char) === false).join("")
    cohortTitle = `${season} ${year}` 
  } else{
    cohortTitle = "All Students"
  }

  function handleListView(){
    setListView(!listView)
  }
  return (
    <main>

      <div>
        <form>
          <label htmlFor="searchInput">
          Search { cohortTitle }:
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
      </div>

      <div>
        <button onClick={handleListView}>
          {listView ? "Switch to Normal View" : "Switch to List View"}
        </button>
      </div>
      
      <div>
        {searchInput === "" && (
          <>
            <h2>{selectedCohort ? cohortTitle : "All Students"} ({count})</h2>
            <div>
              {allStudents.map((student) => (
              <Student key={student.id} student={student} listView={listView} />
              ))}
            </div> 
          </>
        )} 
      </div>

      <div>
        {searchResults.length > 0 ? (
          searchResults.map((result)=>(
            <Student key={result.id} student={result} listView={listView}/>
          ))) : (
          <p>No student with a name containing "{searchInput}" found in {selectedCohort ? cohortTitle : "All Students"}.</p>
        )}
      </div>

    </main>
  )
}

export default StudentList