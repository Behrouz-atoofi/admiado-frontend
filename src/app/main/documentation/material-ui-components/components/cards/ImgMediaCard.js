import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/material-ui-static/images/cards/contemplative-reptile.jpg"
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
      <CardActions>
      <Button size="small">اشتراک گذاری</Button>
        <Button size="small">بیشتر بدانید</Button>
      </CardActions>
    </Card>
  );
}
