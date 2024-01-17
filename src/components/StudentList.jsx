// import { useState, useEffect } from "react"
import { getAllStudents } from "../api/fetch";
import Student from "./Student";


const StudentList = ({allStudents}) => {

  return (
    <div>
      {allStudents.map((student) => (
    <Student key={student.id} student={student} />
  ))};
      </div>
  )
}

export default StudentList