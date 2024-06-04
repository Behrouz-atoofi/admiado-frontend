import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/material-ui-static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          مارمولک
          </Typography>
          <Typography variant="body2" color="text.secondary">
          مارمولک ها گروه گسترده ای از خزندگان سنگفرشی هستند که بیش از 6000 عدد دارند.
گونه ای که در تمام قاره ها به جز قطب جنوب گسترده است
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
