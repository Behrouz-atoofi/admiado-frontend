import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function SinglePricingCard() {
  return (
    <Paper className="flex flex-col lg:flex-row max-w-sm lg:max-w-xl overflow-hidden">
      <div className="p-24 sm:p-32 lg:p-40">
        <Typography className="text-3xl font-bold">عضویت مادام العمر</Typography>

        <Typography className="mt-8 leading-relaxed" color="text.secondary">
        از افراد همفکری که مشتاق ساختن وسایل زندگی در وب هستند بیاموزید. یکبار پرداخت کنید و مادام العمر به انجمن دسترسی داشته باشید.
        </Typography>

        <div className="flex items-center mt-40">
          <Typography className="font-medium" color="text.secondary">
          ویژگی های گنجانده شده 
          </Typography>
          <Divider className="flex-auto ml-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 mt-24">
          <div className="flex items-center">
            <FuseSvgIcon size={20} color="secondary">
              heroicons-solid:check-circle
            </FuseSvgIcon>
            <div className="ml-8">دسترسی به انجمن خصوصی</div>
          </div>
          <div className="flex items-center">
            <FuseSvgIcon size={20} color="secondary">
              heroicons-solid:check-circle
            </FuseSvgIcon>
            <div className="ml-8">دسترسی به کنفرانس آنلاین سالانه</div>
          </div>
          <div className="flex items-center">
            <FuseSvgIcon size={20} color="secondary">
              heroicons-solid:check-circle
            </FuseSvgIcon>
            <div className="ml-8">منابع اعضا</div>
          </div>
          <div className="flex items-center">
            <FuseSvgIcon size={20} color="secondary">
              heroicons-solid:check-circle
            </FuseSvgIcon>
            <div className="ml-8">تی شرت عضویت رسمی</div>
          </div>
        </div>
      </div>

      <Box
        sx={{ backgroundColor: 'primary.main' }}
        className="flex flex-col items-center p-8 lg:px-40 lg:py-48 lg:min-w-320"
      >
        <div className="flex items-center whitespace-nowrap">
          <Typography
            className="text-8xl font-extrabold tracking-tight"
            color="primary.contrastText"
          >
            599,000 IRR
          </Typography>
          <Typography className="ml-2 text-2xl font-semibold" color="text.secondary">
            ایران
          </Typography>
        </div>
        <Typography className="font-medium text-center" color="text.secondary">
        بدون اشتراک ماهانه،
          <br />
          شما فقط یک بار پرداخت می کنید
        </Typography>
        <Button variant="contained" color="secondary" className="w-full mt-32 lg:mt-auto">
        شروع کنید
        </Button>
      </Box>
    </Paper>
  );
}

export default SinglePricingCard;
