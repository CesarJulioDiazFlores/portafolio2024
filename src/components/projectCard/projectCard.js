import React from 'react';
import './projectCard.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

export const ProjectCard = ( { proyecto } ) => {
  const {nombre,video,git,link,tecnologia} = proyecto;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }; 

  return (
    <div className="carousel-item  active" data-bs-interval="10000">
    <img src={video} className="d-block w-100" alt=""/>
    <div className="carousel-caption d-none d-md-block">
      <div className="btn-group" role="group" aria-label="Basic example">
        {/* <button ></button> */}
        <a href={git} type="button" className="btn btn-propio" ><GitHubIcon/></a>
        <a href={link} type="button" className="btn btn-propio"><DesktopWindowsOutlinedIcon/></a>
          <CardActions disableSpacing>
              <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                  <ExpandMoreIcon />
              </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                  <Typography paragraph>'{nombre}{tecnologia}'  </Typography>
              </CardContent>
          </Collapse>
      </div>
    </div>
  </div>
  )
}


export default ProjectCard
