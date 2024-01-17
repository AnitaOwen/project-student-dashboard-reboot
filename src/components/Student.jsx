import React from "react";

const Student = ({ student }) => {
  const name = student.names;
  return (
    <div>
      <p>
        {name.preferredName} {name.middleName} {name.surname}
      </p>
      <p>Email: {student.username}</p>
      <p>Birthday: {student.dob}</p>
    </div>
  );
};

export default Student;
