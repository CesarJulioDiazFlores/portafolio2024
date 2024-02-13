
import "./certificadoCard.css"
import { Button, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import mono from "../../statics/imagenes/gratisography-dj-gorilla-free-stock-photo.jpg"
import neon from "../../statics/imagenes//gratisography-neon-lightbulb-free-stock-photo.jpg"

export default function MultiActionAreaCard() {
  return (
    <div className="cursos-container">
      <div className="curso">
      <Card sx={{ maxWidth: 500,backgroundColor: 'rgba(255, 255, 255, 0.6)'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={neon}
            alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Descargar
          </Button>
        </CardActions>
      </Card>

      </div>

      <div className="curso">
        <Card sx={{ maxWidth: 500,backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={mono}
              alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Descargar
            </Button>
          </CardActions>
        </Card>

      </div>


    
      </div>
    

  );
}