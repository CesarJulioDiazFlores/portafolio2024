import React from 'react';
import './projectCard.css';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ProjectCard from './projectCard';
import { Grid } from '@mui/material';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
  })
}));

export const Carrusel = () => {
  const proyectosObj =[
      {
        nombre: "Bienes raices",
        video: "https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp",
        git: "",
        link:"",
        tecnologias: "php, html, scss, gulp, sql",

      },
      {
        nombre: "proyectos 2 ",
        video: "https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp",
        git: "",
        link:"",
        tecnologias: "",
        
      },
      {
        nombre: "proyectos 3 ",
        video: "https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp",
        git: "",
        link:"",
        tecnologias: "",
        
      }
  ];

  const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
  };
  return (
    // <div className="curso">
          <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.6)',  borderRadius: "30px"}} >
          <div id="carouselExampleDark" className="carousel carousel-dark slide tamaño ">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              {
                proyectosObj.map((project) => (
                  < ProjectCard proyecto={project}/>
                
                ) )
              }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </Card>

    // </div>

 

  )
}


export default Carrusel
