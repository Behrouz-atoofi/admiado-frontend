import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import _ from '@lodash';
import Paper from '@mui/material/Paper';
import FuseCountdown from '@fuse/core/FuseCountdown';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('باید یک ایمیل معتبر وارد کنید').required('باید یک ایمیل وارد کنید'),
});

const defaultValues = {
  email: '',
};

function ClassicComingSoonPage() {
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit() {
    reset(defaultValues);
  }

  return (
    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0">
      <Paper className="w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl sm:shadow">
        <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
          <img className="w-48" src="assets/images/logo/logo.svg" alt="قالب ادمین ری اکتی Fuse" />

          <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight">
          تقریباً تمومه !
          </Typography>
          <Typography className="mt-2">
          آیا می خواهید زمانی که ما آماده شدیم به شما اطلاع داده شود؟ در قسمت زیر ثبت نام کنید تا بتوانیم در مورد راه اندازی به شما اطلاع دهیم!
          </Typography>

          <div className="flex flex-col items-center py-48">
            <FuseCountdown endDate="2024-07-28" />
          </div>

          <form
            name="comingSoonForm"
            noValidate
            className="flex flex-col justify-center w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="آدرس ایمیل"
                  type="email"
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />

            <Button
              variant="contained"
              color="secondary"
              className=" w-full mt-4"
              aria-label="Register"
              disabled={_.isEmpty(dirtyFields) || !isValid}
              type="submit"
              size="large"
            >
      وقتی اماده شد، به من خبر بده!
            </Button>

            <Typography className="mt-32 text-md font-medium" color="text.secondary">
            این یک اشتراک خبرنامه نیست. وقتی شروع به کار کردیم یک ایمیل برای شما ارسال می کنیم و سپس از لیست حذف خواهید شد.
            </Typography>
          </form>
        </div>
      </Paper>
    </div>
  );
}

export default ClassicComingSoonPage;
