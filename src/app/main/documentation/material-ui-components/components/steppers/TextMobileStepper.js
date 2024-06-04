import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    label: 'تنظیمات کمپین را انتخاب کنید',
    description: `برای هر کمپین تبلیغاتی که ایجاد می‌کنید، می‌توانید میزان هزینه‌ای که می‌خواهید برای کلیک‌ها و تبدیل‌ها خرج کنید، در کدام شبکه و مکان‌های جغرافیایی که می‌خواهید تبلیغات شما نمایش داده شود و موارد دیگر را کنترل کنید.`,
  },
  {
    label: 'یک گروه تبلیغاتی ایجاد کنید',
    description:
      'یک گروه تبلیغاتی حاوی یک یا چند آگهی است که مجموعه ای مشترک از کلمات کلیدی را هدف قرار می دهد.',
  },
  {
    label: 'یک تبلیغ بساز',
    description: `متن های تبلیغاتی مختلف را امتحان کنید تا ببینید چه چیزی بیشترین مشتری را به همراه دارد و یاد بگیرید چگونه تبلیغات خود را با استفاده از ویژگی هایی مانند افزونه های تبلیغاتی ارتقا دهید.
    اگر با هر گونه مشکلی در تبلیغات خود مواجه شدید، بیاموزید که چگونه می توان تشخیص داد که در حال اجرا هستند و چگونه مشکلات تأیید را حل کنید.`,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            بعدی
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            بازگشت
          </Button>
        }
      />
    </Box>
  );
}
