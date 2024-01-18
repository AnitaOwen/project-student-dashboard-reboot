import React from "react";

const Student = ({ student }) => {
  const name = student.names;

  const birthday = new Date(student.dob)
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric"
  }
  
  return (
    <div>
      <img src={student.profilePhoto} alt={name.preferredName} />
      <h2>
        {name.preferredName} {name.middleName} {name.surname}
      </h2>
      <h3>Email: {student.username}</h3>
      <p>Birthday: {birthday.toLocaleDateString('en-US', options)}</p>
    </div>
  );
};

export default Student;
