import Header from "./components/Header";
import About from "./components/About";
import Aside from "./components/Aside"
import StudentList from "./components/StudentList"
import Home from "./components/Home";

function App() {
  return (
    <div>
    <Header />
    <About />
    <Aside />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/students">
          <Route index element={<StudentList />} /> 
          <Route path=":cohortCode" element={<StudentList />} />
        </Route>
    </Routes>
    </div>
    

  );
}

export default App;
