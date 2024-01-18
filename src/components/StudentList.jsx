import Student from "./Student";


const StudentList = ({allStudents, selectedCohort}) => {
  const count = allStudents.length


  return (
    <>
    <h2>{selectedCohort ? selectedCohort : "All Students"} ({count})</h2>
    <div>
      {allStudents.map((student) => (
    <Student key={student.id} student={student} />
  ))};
      </div>
      </>
  )
}

export default StudentList