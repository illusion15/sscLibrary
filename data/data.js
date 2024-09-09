
function applyLectureInnerHtml(lectures){
  return `<div class="lecture-card">
   <div class="iframe-container">
   <iframe width="560" height="315" src="${lectures.lecAddress}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>
   <div class="lecture-info">
   <h4>${lectures.lecName}</h4>
   <div class="extra-features">
   <div class="left">
   <a href="${lectures.notesAddress}" target="_blank">Download Notes
   <span class="material-symbols-outlined">download</span>
   </a>
   </div>
   <div class="right">
   <label>Completed<input class="myCheckbox" type="checkbox" id="${lectures.id}"></label>
   </div>
   </div>
   </div>
   </div>`
}; 
// REASONING =====================================
const reasoning_series_lectures = [
  { 
    id: '0001',
    lecName: `Word series (Foundation)`,
    lecAddress: `https://www.youtube-nocookie.com/embed/Yz26CjIHN-g?si=UjOJFQ_gzDKnDlQ8`,
    notesAddress: null,
  },
  {
    id: '0002',
    lecName: `Number Series (Foundation)`,
    lecAddress: `https://www.youtube-nocookie.com/embed/jijtURcw_Ak?si=QkgTd0Rpe9ho406_`,
    notesAddress: null,
  },
  {
    id: '0003',
    lecName: `Series Lecture: 1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/idZ43LOroHk?si=AuAAtx6lHWmXaKEN`,
    notesAddress: null,
  },
  {
    id: '0004',
    lecName: `Series Lecture: 2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/7j4ZnLWlSi4?si=N8qaLshg3yRsLLt7`,
    notesAddress: null,
  },
  {
    id: '0005',
    lecName: `Series Lecture: 3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/MuK2ySBPZ2s?si=BpwYCDsynpFAVkbV`,
    notesAddress: null,
  },
  {
    id: '0006',
    lecName: `Series Lecture: 4`,
    lecAddress: `https://www.youtube-nocookie.com/embed/qZAwH8syL5U?si=8bGH0jJjVoKKpHA8`,
    notesAddress: null,
  },
  
  ]

// Mathematics =========================================

const math_digitalSum_lectures = [
  { 
    id: '0007',
    lecName: `Digital sum part: 1`,
    lecAddress: `https://www.youtube.com/embed/mUp03J4F-fc?si=98WDcqXCNDgNAPUQ`,
    notesAddress: null,
  },
  { 
    id: '0008',
    lecName: `Digital sum part: 2`,
    lecAddress: `https://www.youtube.com/embed/kHjcmSFuw8U?si=a8sdUiWC772VX616`,
    notesAddress: null,
  },
  
]

const math_numberSystem_lectures = [
  { 
    id: '0009',
    lecName: `Number System Lec: 1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/I80183rrvZY?si=FyXGBbUSYh_zzmnC`,
    notesAddress: `../../mathsNotes/16 Number System/01.pdf`,
  },
  { 
    id: '0010',
    lecName: `Number System Lec: 2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/oe4SLyTtkx0?si=iSgj13nAtG1MASVF`,
    notesAddress: `../../mathsNotes/16 Number System/02.pdf`,
  },
  { 
    id: '0011',
    lecName: `Number System Lec: 3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/MEYeGkluOsc?si=3j_4Jx3EwcXHeUer`,
    notesAddress: `../../mathsNotes/16 Number System/03.pdf`,
  },
]

const math_percentage_lectures = [
  { 
    id: '0012',
    lecName: `Percentage Lec: 1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/anhbMmxLSiU?si=Ci3qqt6Hbdv25WNx`,
    notesAddress: `../../mathsNotes/02 Percentage/01.pdf`,
  },
  { 
    id: '0013',
    lecName: `Percentage Lec: 2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/13lhhdfulYk?si=xY7OSzwKekcot9lC`,
    notesAddress: `../../mathsNotes/02 Percentage/02.pdf`,
  },
  { 
    id: '0014',
    lecName: `Percentage Lec: 3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/uIgfE1yWHMs?si=_altg3C3teQIL34i`,
    notesAddress: `../../mathsNotes/02 Percentage/03.pdf`,
  },
  { 
    id: '0015',
    lecName: `Percentage Lec: 4`,
    lecAddress: `https://www.youtube-nocookie.com/embed/HvwaRsvUwQI?si=nDxB-e15OkEl6k8Y`,
    notesAddress: `../../mathsNotes/02 Percentage/04.pdf`,
  },
  { 
    id: '0016',
    lecName: `Percentage Lec: 5`,
    lecAddress: `https://www.youtube-nocookie.com/embed/KNJntHXUrOA?si=DWsyu7U9qjiI9h8n`,
    notesAddress: `../../mathsNotes/02 Percentage/05.pdf`,
  },
  { 
    id: '0017',
    lecName: `Percentage Lec: 6`,
    lecAddress: `https://www.youtube-nocookie.com/embed/m5mKtzU7T9I?si=bmECFkHxLBKIgqjQ`,
    notesAddress: `../../mathsNotes/02 Percentage/06.pdf`,
  },
  { 
    id: '0018',
    lecName: `Percentage Lec: 7`,
    lecAddress: `https://www.youtube-nocookie.com/embed/kFsw5NbaN5s?si=FxdE9MlKENzkL5mU`,
    notesAddress: `../../mathsNotes/02 Percentage/07.pdf`,
  },

]

const math_profitAndLoss_lectures = [
  { 
    id: '0019',
    lecName: `Profit and Loss Lec: 1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/qeh_IpVwj2M?si=wkYhp8QReInrsxxT`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/01.pdf`,
  },
  { 
    id: '0020',
    lecName: `Profit and Loss Lec: 2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/ny8YWy_-aqA?si=VVGvEuKjZ51a57Q2`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/02.pdf`,
  },
  { 
    id: '0021',
    lecName: `Profit and Loss Lec: 3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/SuZH0OxsXE0?si=dfzsj8T7no4MIyU6`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/03.pdf`,
  },
  { 
    id: '0022',
    lecName: `Profit and Loss Lec: 4`,
    lecAddress: `https://www.youtube-nocookie.com/embed/XYiUKLNI4vE?si=hc3_hec8j3FKCjDm`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/04.pdf`,
  },
  { 
    id: '0023',
    lecName: `Profit and Loss Lec: 5`,
    lecAddress: `https://www.youtube-nocookie.com/embed/Fg9-Rl9IW80?si=8MfwceR5NppAxGYP`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/05.pdf`,
  },
  { 
    id: '0024',
    lecName: `Profit and Loss Lec: 6`,
    lecAddress: `https://www.youtube-nocookie.com/embed/ls_jv4bijB8?si=8urI5CuPR_IPg6P3`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/06.pdf`,
  },
  { 
    id: '0025',
    lecName: `Profit and Loss Lec: 7`,
    lecAddress: `https://www.youtube-nocookie.com/embed/CC1y4o4LSU8?si=spxG5UbAOPQ65cjs`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/07.pdf`,
  },

]

const math_timeAndWork_lectures = [
  { 
    id: '0026',
    lecName: `Time and Work Lec: 1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/pj5Uj2YK8jE?si=uYui1RPcl0IptFNk`,
    notesAddress: `../../mathsNotes/04 Time and Work/01.pdf`,
  },
  { 
    id: '0027',
    lecName: `Time and Work Lec: 2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/Q6wtnDH6kPU?si=WY0AD9mj6F7Hqu1f`,
    notesAddress: `../../mathsNotes/04 Time and Work/02.pdf`,
  },
  { 
    id: '0028',
    lecName: `Time and Work Lec: 3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/xPVTEMUliAc?si=1HiTJEwWOJsqbOcY`,
    notesAddress: `../../mathsNotes/04 Time and Work/03.pdf`,
  },
  { 
    id: '0029',
    lecName: `Time and Work Lec: 4`,
    lecAddress: `https://www.youtube-nocookie.com/embed/-iVu8pGP1_Q?si=lRBNYWq93_NyR67l`,
    notesAddress: `../../mathsNotes/04 Time and Work/04.pdf`,
  },
  { 
    id: '0030',
    lecName: `Time and Work Lec: 5`,
    lecAddress: `https://www.youtube-nocookie.com/embed/X009AJd18i4?si=FWOqX_-CJFVGLmSQ`,
    notesAddress: `../../mathsNotes/04 Time and Work/05.pdf`,
  },
  { 
    id: '0031',
    lecName: `Time and Work Lec: 6`,
    lecAddress: `https://www.youtube-nocookie.com/embed/67iQIFwW_mE?si=JTrVB1E8hJGHmkGW`,
    notesAddress: `../../mathsNotes/04 Time and Work/06.pdf`,
  },

]