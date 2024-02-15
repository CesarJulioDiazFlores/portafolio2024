import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'; 
// import ProjectCard from './components/projectCard/projectCard';
import About from './components/about/about';
import CertificadoCard from './components/certicadoCard/certificadoCard';
import Contacto from './components/contacto/contacto';
import Carrusel from './components/projectCard/carrusel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
function App() {
  return (
    <>
    
    <Box className="color-body" sx={{}}>
    <header className="">
      <Header />

    </header>
    <div style={{ width: '100%',paddingTop: "250px"}} >
      <div className="app-container">
        <div className="app-about-carrusel"><About /></div>
        <div className="app-about-carrusel"> <Carrusel/></div>
      </div>
      <CertificadoCard />
      <Contacto/>
    
     
    
    
    </div>
   
   
    
    </Box>
    </>
  );
}

export default App;
