import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">آخرین مرحله</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'پایان' : 'ادامه'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    بازگشت
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>تمام مراحل کامل شده اند - شما کار را به اتمام رساندید</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            بازنشانی
          </Button>
        </Paper>
      )}
    </Box>
  );
}
