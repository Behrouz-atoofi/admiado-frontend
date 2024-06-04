import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function DirectoryStructureDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
      ساختار دایرکتوری
      </Typography>

      <Box className="mb-24 px-24 py-16 border-1 rounded-16" sx={{ borderColor: 'secondary.main' }}>
        <Typography className="" component="div">
        ساختار دایرکتوری Fuse React ممکن است در ابتدا بسیار زیاد و ترسناک به نظر برسد، اما دنبال کردن این صفحه و دادن کمی زمان برای درک آن قبل از پرش مستقیم به کد کمک زیادی خواهد کرد.
        </Typography>
      </Box>

      <Typography className="mb-16">
      Fuse React مبتنی بر ایده چند منظوره و چند طرح است. شما می توانید فیوز را به عنوان یک کیت شروع و یک راهنما در نظر بگیرید تا فقط یک الگوی ساده. هدف Fuse React نه تنها ارائه یک سبک از پیش ساخته شده برای عناصر بصری است، بلکه راهنمایی است که هنگام ساخت یک برنامه باید دنبال کنید.
      </Typography>

      <Typography className="mb-16">
      این بیشتر پاسخی است به سوالاتی مانند کجا باید این فایل را قرار دهم؟ یا این قطعه کد را در کدام فایل قرار دهم؟ به جای تلفیقی از صفحات نمونه و سبک های آماده برای استفاده.
      </Typography>

      <Typography className="mb-16">در اینجا ساختار دایرکتوری Fuse React را مشاهده می‌کنید:</Typography>

      <div className="overflow-auto w-full h-800">
        <img
          className="max-w-none"
          src="assets/images/etc/directory-structure.png"
          alt="fuse react directory structure"
        />
      </div>
    </>
  );
}

export default DirectoryStructureDoc;
