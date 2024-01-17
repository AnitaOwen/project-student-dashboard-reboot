import React from "react";
import { useState } from "react";

const Aside = ({ allStudents }) => {
  const studentCohort = allStudents.map((student) => {
    return student.cohort.cohortCode;
  });

  const winter2025 = allStudents.filter((student) => {
    return student.cohort.cohortCode === "Winter2025";
  });
  console.log(winter2025);
  return <div>Aside</div>;
};

export default Aside;
