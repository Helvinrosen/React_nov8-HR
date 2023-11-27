import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.cars.com/cldstatic/wp-content/uploads/img-1544939048-1492458699697.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Washing
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Below are some basic car-washing tips. And if you prefer to usean automated, 
            be sure to learn which extras are worth the money.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
