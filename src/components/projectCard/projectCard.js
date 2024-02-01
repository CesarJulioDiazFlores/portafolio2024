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

export const ProjectCard = () => {
  const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
  };
  return (
    <div class="carousel-item  active" data-bs-interval="10000">
    <img  className=""src="https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp " class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-propio"><GitHubIcon/></button>
        <button type="button" class="btn btn-propio"><DesktopWindowsOutlinedIcon/></button>
          <CardActions disableSpacing>
              <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                  <ExpandMoreIcon />
              </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                  <Typography paragraph>Bienes raices</Typography>
              </CardContent>
          </Collapse>
      </div>
    </div>
  </div>
  )
}


export default ProjectCard
