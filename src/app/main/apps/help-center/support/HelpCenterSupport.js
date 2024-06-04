import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';
import _ from '@lodash';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

const defaultValues = { name: '', email: '', subject: '', message: '' };
const schema = yup.object().shape({
  name: yup.string().required('شما باید یک نام وارد کنید'),
  subject: yup.string().required('باید موضوعی را وارد کنید'),
  message: yup.string().required('شما باید یک پیام وارد کنید'),
  email: yup.string().email('باید یک ایمیل معتبر وارد کنید').required('باید یک ایمیل وارد کنید'),
});

function HelpCenterSupport() {
  const { control, handleSubmit, watch, formState } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields, errors } = formState;
  const form = watch();

  function onSubmit(data) {
    console.log(data);
  }

  if (_.isEmpty(form)) {
    return null;
  }

  return (
    <div className="flex flex-col items-center p-24 sm:p-40 container">
      <div className="flex flex-col w-full max-w-4xl">
        <div className="sm:mt-32">
          <Button
            component={Link}
            to="/apps/help-center"
            color="secondary"
            startIcon={<FuseSvgIcon>heroicons-outline:arrow-narrow-left</FuseSvgIcon>}
          >
            بازگشت به مرکز راهنمایی
          </Button>
        </div>
        <div className="mt-8 text-4xl sm:text-7xl font-extrabold tracking-tight leading-tight">
        با پشتیبانی تماس بگیرید
        </div>

        <Paper className="mt-32 sm:mt-48 p-24 pb-28 sm:p-40 sm:pb-28 rounded-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="px-0 sm:px-24">
            <div className="mb-24">
              <Typography className="text-2xl font-bold tracking-tight">
              درخواست خود را ثبت کنید
              </Typography>
              <Typography color="text.secondary">
              درخواست شما رسیدگی خواهد شد و کارکنان پشتیبانی ما در عرض 24 ساعت با شما تماس خواهند گرفت.
              </Typography>
            </div>
            <div className="space-y-32">
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <TextField
                    className="w-full"
                    {...field}
                    label="نام"
                    placeholder="نام"
                    id="name"
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
              />

              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mt-16 w-full"
                    label="آدرس ایمیل"
                    placeholder="ایمیل"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    required
                  />
                )}
              />

              <Controller
                control={control}
                name="subject"
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mt-16 w-full"
                    label="موضوع"
                    placeholder="موضوع"
                    variant="outlined"
                    fullWidth
                    error={!!errors.subject}
                    helperText={errors?.subject?.message}
                    required
                  />
                )}
              />

              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="پیام"
                    className="mt-16 w-full"
                    margin="normal"
                    multiline
                    minRows={4}
                    variant="outlined"
                    error={!!errors.message}
                    helperText={errors?.message?.message}
                    required
                  />
                )}
              />
            </div>
          </form>
          <div className="flex items-center justify-end mt-32">
            <Button className="mx-8">انصراف</Button>
            <Button
              className="mx-8"
              variant="contained"
              color="secondary"
              disabled={_.isEmpty(dirtyFields) || !isValid}
              onClick={handleSubmit(onSubmit)}
            >
             ذخیره
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default HelpCenterSupport;
