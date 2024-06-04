import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import _ from '@lodash';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup.string().required('شما باید نام خود را وارد کنید'),
  password: yup
    .string()
    .required('لطفا رمز عبور خود را وارد کنید.')
    .min(8, 'رمز عبور خیلی کوتاه است - حداقل باید 8 کاراکتر باشد.'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'رمزهای عبور باید مطابقت داشته باشند'),
});

const defaultValues = {
  name: 'فاطمه کاظمی',
  password: '',
};

function ClassicUnlockSessionPage() {
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
            قفل سسشن خود را باز کنید
          </Typography>
          <Typography className="font-medium">session شما به دلیل عدم فعالیت قفل شده است</Typography>

          <form
            name="registerForm"
            noValidate
            className="flex flex-col justify-center w-full mt-32"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="نام و نام خانوادگی"
                  autoFocus
                  type="name"
                  error={!!errors.name}
                  helperText={errors?.name?.message}
                  variant="outlined"
                  fullWidth
                  disabled
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="رمزعبور"
                  type="password"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
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
              قفل سسشن خود را باز کنید
            </Button>

            <Typography className="mt-32 text-md font-medium" color="text.secondary">
              <span>من نیستم</span>
              <Link className="ml-4" to="/sign-in">
                فاطمه کاظمی
              </Link>
            </Typography>
          </form>
        </div>
      </Paper>
    </div>
  );
}

export default ClassicUnlockSessionPage;
