import React from "react";
import { Link } from "react-router-dom";

const Student = ({ student }) => {
  const name = student.names;
  return (
    <Link to={`/students/${student.id}`}>
      <div>
        <img src={student.profilePhoto} alt={name.preferredName} />
        <h2>
          {name.preferredName} {name.middleName} {name.surname}
        </h2>
        <h3>Email: {student.username}</h3>
        <p>Birthday: {student.dob}</p>
      </div>
    </Link>
  );
};

export default Student;

