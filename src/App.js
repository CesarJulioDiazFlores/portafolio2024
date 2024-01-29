import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'; 
import ProjectCard from './components/projectCard/projectCard';
import About from './components/about/about';
import CertificadoCard from './components/certicadoCard/certificadoCard';
import Contacto from './components/contacto/contacto';
function App() {
  return (
    <>
    <div className="App">
      <Header />
      <ProjectCard/>
      <CertificadoCard />
      <Contacto/>
      <About/>
    </div>
    </>
  );
}

export default App;
