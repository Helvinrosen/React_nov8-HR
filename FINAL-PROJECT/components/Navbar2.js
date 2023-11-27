import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.gurneysautomotive.com/wp-content/uploads/2021/05/oil-change-wilton.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Oiling
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Oil and filter changes are part of your routine maintenance schedule.
           It’s a service  few things are as crucial as using the right oil in the engine.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
