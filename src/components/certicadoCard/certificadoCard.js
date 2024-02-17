
import "./certificadoCard.css"
import { Button, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import mono from "../../statics/imagenes/gratisography-dj-gorilla-free-stock-photo.jpg"
import python from "../../statics/imagenes/certificadopython.png"

export default function MultiActionAreaCard() {
  return (
    <div className="cursos-container">
      <div className="curso">
      <Card sx={{ maxWidth: 600 ,backgroundColor: 'rgba(255, 255, 255, 0.6)'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={python}
            alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Contenido:
            -SQL
            -PYTHON
            -DJANGO
            -GIT HUB
            Duracion:
            3 meses
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
              <button class="learn-more"> descargar
            </button>
        </CardActions>
      </Card>

      </div>

      <div className="curso">
        <Card sx={{ maxWidth: 600,backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
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
              Contenido:
              -SQL
              -PYTHON
              -DJANGO
              -GIT HUB
              Duracion:
              3 meses
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <button class="learn-more"> descargar
            </button>
          </CardActions>
        </Card>

      </div>


    
      </div>
    

  );
}