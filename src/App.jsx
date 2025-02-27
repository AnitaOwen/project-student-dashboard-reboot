import { Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Aside from "./components/Aside";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer"
import StudentInfo from "./components/StudentInfo";
import Home from "./components/Home";
import { getAllStudents } from "./api/fetch";

function App() {
  const [allStudents, setAllStudents] = useState([]);

  const { cohortCode } = useParams();
  const [selectedCohort, setSelectedCohort] = useState(cohortCode)

  // array of all student objects that match the selectedCohort state.
  const matchingCohort = allStudents.filter((student) => {
    return student.cohort.cohortCode === selectedCohort;
  });
  // console.log(matchingCohort)


  function handleOnClick(cohort){
    setSelectedCohort(cohort)
  }

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
      <section className="name-container">
      <Aside allStudents={allStudents} handleOnClick={handleOnClick} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
        
      <Route path="/students">
        <Route index element={<StudentList allStudents={allStudents} selectedCohort={selectedCohort}/>} />
        <Route path=":cohortCode" element={<StudentList allStudents={matchingCohort} selectedCohort={selectedCohort}/>} />
      </Route>
      
      <Route path="/student/:id" element={<StudentInfo allStudents={allStudents} />} />
      
    </Routes>
    </section>
    <Footer/>
      
    </div>
  );
}

export default App;

