import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'quickPanel/data',
  initialState: {
    notes: [
      {
        id: 1,
        title: 'بهترین آهنگ ها برای گوش دادن در حین کار',
        detail: 'آخرین ویرایش: 8 مرداد 1399',
      },
      {
        id: 2,
        title: 'subreddit های مفید',
        detail: 'آخرین ویرایش: 18 شهریور 1398',
      },
    ],
    events: [
      {
        id: 1,
        title: 'جلسه گروهی گوگل میت',
        detail: 'اتاق کنفرانس 1B',
      },
      {
        id: 2,

        title: 'انتشار نسخه بتا عمومی',
        detail: '11:00 بعداز ظهر',
      },
      {
        id: 3,
        title: 'قرار شام با مینا',
        detail: '17:30 بعداز ظهر',
      },
      {
        id: 4,
        title: 'جلسه Q&A',
        detail: '20:30 بعداز ظهر',
      },
    ],
  },
  reducers: {},
});

export const selectQuickPanelData = ({ quickPanel }) => quickPanel.data;

export default dataSlice.reducer;
