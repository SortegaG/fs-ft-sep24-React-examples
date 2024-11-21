import React from "react";
import "./ChristmasItem.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ChristmasItem = ({ data, remove }) => {
  const { title, description, img_url, price } = data;
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={img_url}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Titulo:{title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Descripción:{description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Precio:{price}€
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={remove} size="small">Borrar</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ChristmasItem;
