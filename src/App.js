import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'; 
// import ProjectCard from './components/projectCard/projectCard';
import About from './components/about/about';
import CertificadoCard from './components/certicadoCard/certificadoCard';
import Contacto from './components/contacto/contacto';
import Carrusel from './components/projectCard/carrusel'
function App() {
  return (
    <>
    <header className="App">
      <Header />

    </header>
    <body className="color-body ubicaciones" >
    <div className="elemento-esquina"  >
      
      <About/>
    </div>
    <div className="elemento-otro" >
      
      <Carrusel/>
    </div>
    <div>
    <CertificadoCard />

    </div>
    


    </body>
      
    <footer className="color-footer">
      <Contacto/>
    
    
    </footer>

    </>
  );
}

export default App;
