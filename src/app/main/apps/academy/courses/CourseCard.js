import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { lighten } from '@mui/material/styles';
import CourseInfo from '../CourseInfo';
import CourseProgress from '../CourseProgress';

function CourseCard({ course }) {
  function buttonStatus() {
    switch (course.activeStep) {
      case course.totalSteps:
        return 'تکمیل شده';
      case 0:
        return 'شروع';
      default:
        return 'ادامه';
    }
  }

  return (
    <Card className="flex flex-col h-384 shadow">
      <CardContent className="flex flex-col flex-auto p-24">
        <CourseInfo course={course} className="" />
      </CardContent>
      <CourseProgress className="" course={course} />
      <CardActions
        className="items-center justify-end py-16 px-24"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.03),
        }}
      >
        <Button
          to={`/apps/academy/courses/${course.id}/${course.slug}`}
          component={Link}
          className="px-16 min-w-128"
          color="secondary"
          variant="contained"
          endIcon={
            <FuseSvgIcon className="" size={20}>
              heroicons-solid:arrow-sm-left
            </FuseSvgIcon>
          }
        >
          {buttonStatus()}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CourseCard;
