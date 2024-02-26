import React from 'react';
import './projectCard.css';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ProjectCard from './projectCard';
import { Grid } from '@mui/material';
import bienesraices from "../../statics/imagenes/bienesraices-imagen.png"
import festival from "../../statics/imagenes/festival-imagen.png"
import blogcafe from "../../statics/imagenes/blogcafe.png"

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
        video: bienesraices,
        git: "",
        link:"",
        tecnologias: "php, html, scss, gulp, sql",

      },
      {
        nombre: "proyectos 2 ",
        video: festival,
        git: "",
        link:"",
        tecnologias: "",
        
      },
      {
        nombre: "proyectos 3 ",
        video: blogcafe,
        git: "https://github.com/CesarJulioDiazFlores/blogdecafe",
        link:"https://cesarjuliodiazflores.github.io/blogdecafe/",
        tecnologias: "",
        
      }
  ];

  const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
  };
  return (
    <div className="carrusel-container">
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

     </div>

 

  )
}


export default Carrusel
