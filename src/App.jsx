import { students } from "./data/students.js";
import StudentList from "./components/StudentList.jsx";
//import StatusBadge from "./components/StatusBadge.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
      <>
        <Header />
        <h1>Students List</h1>
        <StudentList students={students} />
        <Footer />
      </>
  );
}

export default App;