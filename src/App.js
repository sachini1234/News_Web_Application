import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Topbar from "./Components/Topbar";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

const App = () => {

  const [category, setCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App"> 
      <Topbar /> 
      <Header /> 
      <NavBar setCategory={setCategory} setSearchTerm={setSearchTerm} /> 
      <Home category={category} setCategory={setCategory} searchTerm={searchTerm} /> 
      <Footer /> 
    </div>
  );
}

export default App;
