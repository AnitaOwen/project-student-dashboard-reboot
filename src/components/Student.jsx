import React from "react";
import { Link } from "react-router-dom";

const Student = ({ student, listView }) => {
  const name = student.names;

  const birthday = new Date(student.dob);
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  return (
    <div className="student">
      {listView ? (
        <>
          <Link to={`student/${student.id}`}>
            <h3>
              {name.preferredName} {name.middleName} {name.surname}
            </h3>
          </Link>
        </>
      ) : (
        <>
          <Link to={`/student/${student.id}`}>
            <img
              className="student_image"
              src={student.profilePhoto}
              alt={name.preferredName}
            />
            <h3>
              {name.preferredName} {name.middleName} {name.surname}
            </h3>
            <p>{student.username}</p>
            <p>Birthday: {birthday.toLocaleDateString("en-US", options)}</p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Student;
