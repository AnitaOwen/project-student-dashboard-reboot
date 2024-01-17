import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Aside from "./components/Aside";
import StudentList from "./components/StudentList";
import Home from "./components/Home";
import { useState } from "react";
import { useEffect } from "react";
import { getAllStudents } from "./api/fetch";

function App() {
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    getAllStudents()
      .then((data) => {
        console.log(data);
        setAllStudents(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <About />
      <Aside allStudents={allStudents} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/students">
          <Route index element={<StudentList allStudents={allStudents} />} />
          {/* <Route path=":cohortCode" element={<StudentList />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
