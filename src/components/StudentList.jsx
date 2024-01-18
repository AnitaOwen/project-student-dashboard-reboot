import Student from "./Student";


const StudentList = ({allStudents, selectedCohort}) => {
  const count = allStudents.length

  let cohortTitle;
  if(selectedCohort){
    const titleArray = selectedCohort.split("")
    const season = titleArray.filter((char) => isNaN(+char) === true).join("")
    const year = titleArray.filter((char) => isNaN(+char) === false).join("")
    cohortTitle = `${season} ${year}`
  }

  return (
    <>
    <h2>{selectedCohort ? cohortTitle : "All Students"} ({count})</h2>
    <div>
      {allStudents.map((student) => (
    <Student key={student.id} student={student} />
  ))}
      </div>
      </>
  )
}

export default StudentList