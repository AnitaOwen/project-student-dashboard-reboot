import React from "react";

const Student = ({ student, listView }) => {
  const name = student.names;

  const birthday = new Date(student.dob)
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric"
  }
  
  return (
    <div>
      {listView ? (
        <>
          <h3>
            {name.preferredName} {name.middleName} {name.surname}
          </h3>
        </>
      ) : (
        <>
          <img src={student.profilePhoto} alt={name.preferredName} />
          <h3>
            {name.preferredName} {name.middleName} {name.surname}
          </h3>
          <p>{student.username}</p>
          <p>Birthday: {birthday.toLocaleDateString('en-US', options)}</p>
        </>
      )}
    </div>

  );
};

export default Student;
