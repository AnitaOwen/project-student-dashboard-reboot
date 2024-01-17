import { useState, useEffect } from "react"
import { getAllStudents } from "../api/fetch";
import Student from "./components/Student";

const StudentsIndex = () => {
  const [allstudents, setAllStudents] = useState([]);

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
      StudentsIndex
      <Student />
      </div>
  )
}

export default StudentsIndex