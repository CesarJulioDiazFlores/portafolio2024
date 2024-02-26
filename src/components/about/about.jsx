import { Grid } from '@mui/material';
import './about.css';
import Card from '@mui/material/Card';

const about = () => {
  return (
    <div className='about-container'>
    <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.6)',  borderRadius: "30px", maxHeight: "300px"}}>
 
        <div className="about">
            <h1 className="texto"> Cesar Julio <span className="t2">Diaz flores</span> </h1>
            <p className="parrafo">
            Hola, soy Cesar Díaz, un programador  con experiencia en HTML5, CSS3, JavaScript, 
            AJAX, PHP y MySQL para desarrollo web. Exploro Python con Django y Node.js. Uso SASS para estilos avanzados. 
            Interesado en expandir habilidades con frameworks frontend,  
            bases de datos NoSQL, control de versiones y desarrollo full stack. 
            ¡Emocionado por aprender y crecer! 🚀💻</p>
          
            <p >
          
            <img className="iconos" src="https://skillicons.dev/icons?i=html,react,py,php,mysql,nodejs,js,gulp,github,git,django,css" />
        
            </p>
          
        </div>

  
      
    </Card>
    </div>

  )
}

export default about