import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://gandgautorepair.com/wp-content/uploads/2020/10/How-to-change-a-flat-tire.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tyre Changing
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Tires should also be free of  irregular wear 
          for optimal performance and safety. so that you can safely extend the life of your tires.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
