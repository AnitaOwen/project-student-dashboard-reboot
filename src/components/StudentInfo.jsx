import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Student from "./Student";

const StudentInfo = ({ allStudents, matchingStudent }) => {
  // useParams
  const { id } = useParams();
  //useStates
  const [formInput, setFormInput] = useState({ author: "", comment: "" });
  const [notes, setNotes] = useState([]);
  const [student, setStudent] = useState(null);
  //useEffect
  useEffect(() => {
    // Find the selected student based on the id
    const matchingStudent = allStudents.find((student) => student.id === id);
    setStudent(matchingStudent);
  }, [allStudents, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      author: formInput.author,
      comment: formInput.comment,
    };
    setNotes([...notes, newNote]);
    setFormInput({ author: "", comment: "" });
  };

  const handleTextChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  return (
<div className="container">
      {student ? (
        <>
{/* Original Info */}
<Student student={student} />

{/* Codewars Stats Table */}
<div>
<h2>Codewars Stats</h2>
<table>
  <tbody>
    <tr>
      <td>Current Total:</td>
      <td className="table-value">{student.codewars.current.total}</td>
    </tr>
    <tr>
      <td>Last Week's Total:</td>
      <td className="table-value">{student.codewars.current.lastWeek}</td>
    </tr>
    <tr>
      <td>Goal Total:</td>
      <td className="table-value">{student.codewars.goal.total}</td>
    </tr>
    <tr>
      <td>Percent of Goal Achieved:</td>
      <td className="table-value">
        {(
          (student.codewars.current.total / student.codewars.goal.total) *
          100
        ).toFixed()}
        %
      </td>
    </tr>
  </tbody>
</table>
</div>
{/* Scores Table */}
<div>
<h2>Scores</h2>
<table>
  <tbody>
    <tr>
      <td>Assignments:</td>
      <td className="table-value">{(student.cohort.scores.assignments * 100).toFixed()}%</td>
    </tr>
    <tr>
      <td>Projects:</td>
      <td className="table-value">{(student.cohort.scores.projects * 100).toFixed()}%</td>
    </tr>
    <tr>
      <td>Assessments:</td>
      <td className="table-value">{(student.cohort.scores.assessments * 100).toFixed()}%</td>
    </tr>
  </tbody>
</table>
</div>

{/* Certifications Table */}
<div>
<h2>Certifications</h2>
<table>
  <tbody>
    <tr>
      <td>Resume:</td>
      <td className="table-value">{student.certifications.resume ? "✅" : "❌"}</td>
    </tr>
    <tr>
      <td>LinkedIn:</td>
      <td className="table-value">{student.certifications.linkedin ? "✅" : "❌"}</td>
    </tr>
    <tr>
      <td>GitHub:</td>
      <td className="table-value">{student.certifications.github ? "✅" : "❌"}</td>
    </tr>
    <tr>
      <td>Mock Interview:</td>
      <td className="table-value">{student.certifications.mockInterview ? "✅" : "❌"}</td>
    </tr>
    <tr>
      <td>Code Track Goal Reached:</td>
      <td className="table-value">{student.codewars.current.total >= 850 ? "✅" : "❌"}</td>
    </tr>
    <tr>
      <td>Student On Track:</td>
      <td className="table-value">
        {student.certifications.resume &&
        student.certifications.linkedin &&
        student.certifications.github &&
        student.certifications.mockInterview &&
        student.codewars.current.total >= 850
          ? "✅"
          : "❌"}
      </td>
    </tr>
  </tbody>
</table>
</div>

{/* 1-on-1 Notes Section */}
          <section>
            <h3>1-on-1 Notes</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Author:
                <input
                  name="author"
                  value={formInput.author}
                  onChange={handleTextChange}
                  required
                />
              </label>
              <label>
                Comment:
                <input
                  name="comment"
                  value={formInput.comment}
                  onChange={handleTextChange}
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </form>
            <ul>
              {notes.map((note, index) => (
                <li key={index}>
                  <strong>{note.author}:</strong> {note.comment}
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <div>Student not found</div>
      )}
    </div>
  );
};

export default StudentInfo;
