import { useState, useEffect } from "react"
import { getAllStudents } from "../api/fetch";
import Student from "./Student";


const StudentList = () => {
  const [allStudents, setAllStudents] = useState([]);

  useEffect (()=> {
    getAllStudents()
    .then((data) => {
      console.log(data)
      setAllStudents(data);
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])

  return (
    <div>
      {allStudents.map((student) => (
    <Student key={student.id} student={student} />
  ))};
      {/* <Student /> */}
      </div>
  )
}

export default StudentList