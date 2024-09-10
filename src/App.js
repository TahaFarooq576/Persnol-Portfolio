import Navbar from './components/navbar/Navbar'; 
import Header from './components/header/Header'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Form from './components/form/Form';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Skills/>
      <Projects/>
      <Form/>
     <br style={{color:'white'}}></br>
     <hr style={{color:'white'}}></hr>

     <h3 style={{color:'white',marginLeft:'200px'}}>@copy All Right Reserved 2024</h3>
      
    

    </div>
  );
}

export default App;
