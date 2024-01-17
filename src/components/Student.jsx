import React from "react";

const Student = ({ student }) => {
  const name = student.names;
  return (
    <div>
      <img src={student.profilePhoto} alt={name.preferredName} />
      <h2>
        {name.preferredName} {name.middleName} {name.surname}
      </h2>
      <h3>Email: {student.username}</h3>
      <p>Birthday: {student.dob}</p>
    </div>
  );
};

export default Student;
