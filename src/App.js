import Admiision_policy from "./Components/Admiision_policy";
import Director from "./Components/Director";
import Faculty from "./Components/Faculty";
import Fee_struc from "./Components/Fee_struc";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Parent_teach from "./Components/Parent_teach";
import Refistration from "./Components/Refistration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<Header />} />
    <Route exact path="/admissions" element={<Admiision_policy />} />
    <Route exact path="/fee_structure" element={<Fee_struc />} />
    <Route exact path="/parent_tech2" element={<Parent_teach />} />
    <Route exact path="/registration" element={<Refistration />} />
    <Route exact path="/faculty" element={<Faculty />} />
    <Route exact path="/director" element={<Director />} />
    <Route exact path="/gallery" element={<Gallery />} />
    <Route exact path="/contact" element={<Contact />} />
    </Routes>
  
    </>
  );
}

export default App;
