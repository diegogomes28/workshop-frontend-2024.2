import React, {useState} from 'react';
import Header from "../components/HeaderAgentes.js"
import Main from "../components/MainAgentes.js"
import Footer from "../components/Footer.js"




function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
     
    <Header onSearch={setSearchTerm}/>
    <Main searchTerm={searchTerm}/>
    <Footer/>       
    </div>
  );
}

export default App;
