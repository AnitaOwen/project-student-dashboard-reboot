import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Aside = ({ allStudents }) => {
  const { cohortCode } = useParams();
  const studentCohort = allStudents.map((student) => {
    return student.cohort.cohortCode;
  });

  const winter2025 = allStudents.filter((student) => {
    return student.cohort.cohortCode === "Winter2025";
  });
  console.log(winter2025);
  return (
    <div>
      <ul>
        <li>All Students</li>
        <li>Winter 2025</li>
        <li>Spring 2025</li>
        <li>Summer 2025</li>
        <li>Fall 2025</li>
        <li>Winter 2026</li>
        <li>Spring 2026</li>
        <li>Summer 2026</li>
        <li>Fall 2026</li>
      </ul>
    </div>
  );
};

export default Aside;
