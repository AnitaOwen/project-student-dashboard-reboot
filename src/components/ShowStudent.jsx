import React, { useState } from "react";

const ShowStudent = ({ student }) => {
  const [instructorName, setInstructorName] = useState('');
  const [instructorNote, setInstructorNote] = useState('');
  const [notes, setNotes] = useState([]);

  // Handle Form submission
  const handleNoteSubmit = (event) => {
    event.preventDefault();

    setNotes([...notes, { instructorName, instructorNote }]);

    setInstructorName('');
    setInstructorNote('');
  };

  const handleTextChange = (event) => {
    const { name, value } = event.target;

    if (name === 'instructorName') {
      setInstructorName(value);
    } else if (name === 'instructorNote') {
      setInstructorNote(value);
    }
  };
return (
   <div>
    {/* Original Information */}
    <img src={student.profilePhoto} alt={student.name.preferredName} />
    <h2>{student.name.preferredName} {student.name.middleName} {student.name.surname}
    </h2>
    <h3>Email: {student.username}</h3>
    <p>Birthday: {student.dob}</p>
  

    {/* Codewars Stats */}
    <h3>Codewars</h3>
    <p>Current Total: {student.codewars.current.total}</p>
    <p>Last Week:{student.codewars.current.lastweek}</p>
    <p>Goal:{student.codewars.goal.total}</p>
    <p>Percent of Goal Achieved:{((student.codewars.current.total / student.codears.goal.total) * 100).toFixed(2)}%</p>

    {/* Scores */}
    <h3>Scores</h3>
    <p>Assignments:{student.cohort.scores.assignments}%</p>
    <p>Projects:{student.cohort.scores.projects}%</p>
    <p>Assessments:{student.cohort.scores.assessments}%</p>

   
    {/* Certifications */}
    <h3>Certifications</h3>
    <p>Resume: {student.certifications.resume ? '✅' : '❌'}</p>
    <p>LinkedIn: {student.certifications.linkedin ? '✅' : '❌'}</p>
    <p>GitHub: {student.certifications.github ? '✅' : '❌'}</p>
    <p>Mock Interview: {student.certifications.mockInterview ? '✅' : '❌'}</p>


    {/* 1-on-1 Notes Section */}
    <div id="oneOnOneNotes">
      <h3>1-on-1 Notes</h3>
        <form onSubmit={handleNoteSubmit}>
        <label htmlFor="instructorName">Instructor's Name:</label>
        <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={instructorName}
            onChange={handleTextChange}
            required
        />

        <label htmlFor="instructorNote">Instructor's Note:</label>
          <input
            id="instructorNote"
            name="instructorNote"
            rows="4"
            value={instructorNote}
            onChange={handleTextChange}
            required
          ></input>
          <button type="submit">Submit</button>
        </form>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{`${note.instructorName}says: ${note.instructorNote}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShowStudent;