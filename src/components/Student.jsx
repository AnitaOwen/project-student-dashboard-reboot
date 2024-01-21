import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/student/${student.id}`}>
          <h3 className="user-info">
            {name.preferredName} {name.middleName} {name.surname}
          </h3>
        </Link>
        </>
       
      ) : (
        <>
        <Link to={`/student/${student.id}`}>
          <img src={student.profilePhoto} alt={name.preferredName} />
          <h3 className="info-box">
            {name.preferredName} {name.middleName} {name.surname}
          </h3>
        </Link>
          <p className="info-box">{student.username}</p>
          <p className="info-box">Birthday: {birthday.toLocaleDateString('en-US', options)}</p>
        </>
      )}
      
</div>
  );
};

export default Student;

