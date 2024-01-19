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
    <div>
      {student ? (
        <>
          {/* Original Info */}
          <Student student={student} />

          {/* Codewars Stats Heading */}
          <h2>Codewars Stats</h2>
          <p>Current Total: {student.codewars.current.total}</p>
          <p>Last Week's Total: {student.codewars.current.lastWeek}</p>
          <p>Goal Total: {student.codewars.goal.total}</p>
          <p>
            Percent of Goal Achieved:{" "}
            {(
              (student.codewars.current.total / student.codewars.goal.total) *
              100
            ).toFixed()}
            %
          </p>

          {/* Scores Heading */}
          <h2>Scores</h2>
          <p>
            Assignments: {(student.cohort.scores.assignments * 100).toFixed()}%
          </p>
          <p>Projects: {(student.cohort.scores.projects * 100).toFixed()}%</p>
          <p>
            Assessments: {(student.cohort.scores.assessments * 100).toFixed()}%
          </p>

          {/* Certifications Heading */}
          <h2>Certifications</h2>
          <p>Resume: {student.certifications.resume ? "✅" : "❌"}</p>
          <p>LinkedIn: {student.certifications.linkedin ? "✅" : "❌"}</p>
          <p>GitHub: {student.certifications.github ? "✅" : "❌"}</p>
          <p>
            Mock Interview: {student.certifications.mockInterview ? "✅" : "❌"}
          </p>
          <p>
            Code Track Goal Reached? :{" "}
            {student.codewars.current.total >= 850 ? "✅" : "❌"}
          </p>
          <p>
            Student On Track?:{" "}
            {student.certifications.resume &&
            student.certifications.linkedin &&
            student.certifications.github &&
            student.certifications.mockInterview &&
            student.codewars.current.total >= 850
              ? "✅"
              : "❌"}
          </p>

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
