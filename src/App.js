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
    
    <Box className="color-body" sx={{ flexGrow: 1, pb: 50 }}>
    <header className="">
      <Header />

    </header>
    <Grid container spacing={6} sx={{ maxWidth: '95%', margin: '5%' }} >
      <About />
      <Carrusel/>
      <CertificadoCard />
      <Contacto/>
    
     
    
    
    </Grid>
   
   
    
    </Box>
    </>
  );
}

export default App;
