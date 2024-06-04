import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           د
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="میگو و Chorizo Paella"
        subheader="16 مرداد 1398"
      />
      <CardMedia
        component="img"
        height="194"
        image="/material-ui-static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        این پائلا چشمگیر یک غذای مهمانی عالی و یک غذای سرگرم کننده برای طبخ برای مهمانان شما است.
 در صورت تمایل 1 فنجان نخود فرنگی منجمد را به همراه صدف ها اضافه کنید.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>روش:</Typography>
          <Typography paragraph>
          1/2 پیمانه آب گوشت را در قابلمه گرم کنید تا بجوشد، زعفران را اضافه کنید و ببندید
              به مدت 10 دقیقه کنار بگذارید.
          </Typography>
          <Typography paragraph>
          روغن را در یک تابه پائلا (14 تا 16 اینچی) یا یک تابه بزرگ و عمیق روی آن گرم کنید.
             حرارت متوسط به بالا مرغ، میگو و چوریزو را اضافه کنید و بپزید و هم بزنید
             گاهی اوقات تا زمانی که کمی قهوه ای شود، 6 تا 8 دقیقه. انتقال میگو به الف
             بشقاب بزرگ و کنار بگذارید و مرغ و چوریزو را در تابه بگذارید. اضافه کردن
             پیمنتون، برگ بو، سیر، گوجه فرنگی، پیاز، نمک و فلفل و بپزید،
             مرتب هم بزنید تا غلیظ و معطر شود، حدود 10 دقیقه. اضافه کردن
             آب زعفران و 4 1/2 فنجان آب مرغ باقی مانده؛ به جوش بیاورید.
          </Typography>
          <Typography paragraph>
          برنج را اضافه کرده و خیلی آرام هم بزنید تا پخش شود. روی کنگر فرنگی و
             فلفل را بدون هم زدن بپزید تا بیشتر مایع جذب شود.
             15 تا 18 دقیقه حرارت را به متوسط کم کنید، میگوهای ذخیره شده را اضافه کنید و
             صدف ها را داخل برنج بریزید و دوباره بدون آن بپزید
             هم بزنید تا صدف ها باز شوند و برنج نرم شود، 5 تا 7 عدد
             دقیقه بیشتر (صدف هایی که باز نمی شوند را دور بریزید.)
          </Typography>
          <Typography>
          10 دقیقه روی حرارت بگذارید تا استراحت کند و سپس سرو کنید.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
