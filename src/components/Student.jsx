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


//     <Link to={`/students/${student.id}`}>
//       <div>
//         <img src={student.profilePhoto} alt={name.preferredName} />
//         <h2>
//           {name.preferredName} {name.middleName} {name.surname}
//         </h2>
//         <h3>Email: {student.username}</h3>
//         <p>Birthday: {student.dob}</p>
//       </div>
//     </Link>

  );
};

export default Student;

