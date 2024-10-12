
function applyLectureInnerHtml(lectures){
  return `<div class="lecture-card">
    <div class="iframe-container" >
    <iframe id="player" width="560" height="315" src="${lectures.lecAddress}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
const reasoning_announcement_lectures = [
  { 
    id: '0001.1',
    lecName: `Reasoning Syllabus`,
    lecAddress: `Reasoning syllabus.pdf`,
    notesAddress: `Reasoning syllabus.pdf`,
  },
]
const reasoning_Fundamentals_of_Reasoning_lectures = [
  { 
    id: '0001.2',
    lecName: `Alphabets को याद कैसे करें`,
    lecAddress: `https://www.youtube-nocookie.com/embed/UOaQP2TVxpE?si=NkOo0gzY1MUyIDX4`,
    notesAddress: `...`,
  },
  { 
    id: '0001.3',
    lecName: `Opposite Letter को याद कैसे रखें`,
    lecAddress: `https://www.youtube-nocookie.com/embed/7hrOxVw-PvY?si=bVP6WUiJnjOE8cBQ`,
    notesAddress: `...`,
  },
]

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

const reasoning_CI_lectures = [
  { 
    id: '0007',
    lecName: `Coded Inequality part-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/BoooGxhi6-4?si=_zE2Cg4yNqDJ8ARo`,
    notesAddress: null,
  },
  { 
    id: '0008',
    lecName: `Coded Inequality part-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/8A7cMUKmCr8?si=m1s1xKrVCzlEWm-R`,
    notesAddress: null,
  },
]
const reasoning_CD_lectures = [
  { 
    id: '0009',
    lecName: `Coding Decoding Part-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/irPzOPnXVEc?si=7Utl6UG9TJUD4Wsa`,
    notesAddress: null,
  },
  { 
    id: '0010',
    lecName: `Coding Decoding Part-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/NycXqbzLUSY?si=N4BrMOVi-IMPSo3_`,
    notesAddress: null,
  },
]
const reasoning_RA_lectures = [
  { 
    id: '0011',
    lecName: `Ranking Arrangement`,
    lecAddress: `https://www.youtube-nocookie.com/embed/2ivIPqjZe1Q?si=FMHmFdjgJLnTh2w3`,
    notesAddress: null,
  },
]
const reasoning_dice_lectures = [
  { 
    id: '0012',
    lecName: `Dice`,
    lecAddress: `https://www.youtube-nocookie.com/embed/HMvk6ggn8GQ?si=y_Q_xDhNs5AFrHC`,
    notesAddress: null,
  },
]
const reasoning_calendar_lectures = [
  { 
    id: '0013.1',
    lecName: `Calendar (One Shot "in depth") <span class="recommended-tagged-lec">Recomended</span>`,
    lecAddress: `https://www.youtube-nocookie.com/embed/OQarroTPk-U?si=dVPjtRjUoZL6ERR0`,
    notesAddress: null,
  },
  { 
    id: '0013',
    lecName: `Calendar`,
    lecAddress: `https://www.youtube-nocookie.com/embed/gCOshTqyFGo?si=jHoVt2LIawb23jdZ`,
    notesAddress: null,
  },
]
const reasoning_MandWimg_lectures = [
  { 
    id: '0014',
    lecName: `Mirror and Water Image`,
    lecAddress: `https://www.youtube-nocookie.com/embed/nUIDOEL0S4E?si=UigWKotsgGBPY7Cw`,
    notesAddress: null,
  },
]
const reasoning_revision_lectures = [
  { 
    id: '0015',
    lecName: `REVISION`,
    lecAddress: `https://www.youtube-nocookie.com/embed/k7Cos7gj9Bc?si=fPrKqvMN1clo515b`,
    notesAddress: null,
  },
]
const reasoning_syllogism_lectures = [
  { 
    id: '0016.1',
    lecName: `Syllogism (One Shot "in depth") <span class="recommended-tagged-lec">Recomended</span>`,
    lecAddress: `https://www.youtube-nocookie.com/embed/Fep4O4mU05E?si=QoUI5h-isepIQ9vm`,
    notesAddress: null,
  },
  { 
    id: '0016',
    lecName: `Syllogism Part-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/cjJzKu5YeOA?si=UxKGK9zeBrTUpF-h`,
    notesAddress: null,
  },
  { 
    id: '0017',
    lecName: `Syllogism Part-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/KtL_6wLlBgI?si=wElAc9-siT6474zy`,
    notesAddress: null,
  },
]
const reasoning_NAS_lectures = [
  { 
    id: '0018',
    lecName: `Number Analogy and Similarity`,
    lecAddress: `https://www.youtube-nocookie.com/embed/BoMRZlWXIrs?si=QNXRP20ACM69Zd13`,
    notesAddress: null,
  },
]
const reasoning_LA_lectures = [
  { 
    id: '0019',
    lecName: `Letter & Word Analogy`,
    lecAddress: `https://www.youtube-nocookie.com/embed/kn0sGyilV60?si=AlGItNAS65gaj_tx`,
    notesAddress: null,
  },
]
const reasoning_similarity_lectures = [
  { 
    id: '0020',
    lecName: `Similarity`,
    lecAddress: `https://www.youtube-nocookie.com/embed/vn2k1sd_sFU?si=0uBl-EwiMdH3gLWO`,
    notesAddress: null,
  },
]
const reasoning_MO_lectures = [
  { 
    id: '0021',
    lecName: `Mathematical Operations Part-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/rEO4m9kU-io?si=hz09KM3c2amumQIl`,
    notesAddress: null,
  },
  { 
    id: '0022',
    lecName: `Mathematical Operations Part-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/fiqpUJnlfDo?si=cFw2BSmaiaW_L9XY`,
    notesAddress: null,
  },
]
const reasoning_CF_lectures = [
  { 
    id: '0023',
    lecName: `Counting Figure Part-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/exHaBYNhcjU?si=kK8HjjaT9DUP9vY8`,
    notesAddress: null,
  },
  { 
    id: '0024',
    lecName: `Counting Figure Part-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/ZYajtR1qFM8?si=ueq4iplwUrWDWXGt`,
    notesAddress: null,
  },
]
const reasoning_AT_lectures = [
  { 
    id: '0025',
    lecName: `Alphabet Test`,
    lecAddress: `https://www.youtube-nocookie.com/embed/SMW0xJf2o4Y?si=GRamLF82jAkHY4SU`,
    notesAddress: null,
  },
]
const reasoning_PCF_lectures = [
  { 
    id: '0026',
    lecName: `Paper Cutting and Folding`,
    lecAddress: `https://www.youtube-nocookie.com/embed/54UMaqjs-QM?si=nq4KnozcoCh60xm3`,
    notesAddress: null,
  },
]
const reasoning_VD_lectures = [
  { 
    id: '0027',
    lecName: `Venn Diagram Part-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/dbLlP22xcFI?si=Y9qk86gaIaPVrSTU`,
    notesAddress: null,
  },
  { 
    id: '0028',
    lecName: `Venn Diagram Part-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/XA7CaWmuIWs?si=-HDEivjMlDnr55wz`,
    notesAddress: null,
  },
]
const reasoning_AW_lectures = [
  { 
    id: '0029',
    lecName: `Arrangement of Words`,
    lecAddress: `https://www.youtube-nocookie.com/embed/nG7zEifoW_0?si=TFHyjUguE8CgdCwu`,
    notesAddress: null,
  },
]
const reasoning_NS_lectures = [
  { 
    id: '0030',
    lecName: `Number Series Part-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/eR3eOEtUlfQ?si=lczCQzQ2n29MsMte`,
    notesAddress: null,
  },
  { 
    id: '0031',
    lecName: `Number Series Part-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/qCfdHjbh2_4?si=7bwSLXQZKgya-sY-`,
    notesAddress: null,
  },
]
const reasoning_marathon_lectures = [
  { 
    id: '0032',
    lecName: `Reasoning Marathon`,
    lecAddress: `https://www.youtube-nocookie.com/embed/n0LOpxYT0t8?si=oOlkeTFwajco4GCa`,
    notesAddress: null,
  },
]
const reasoning_FS_lectures = [
  { 
    id: '0033',
    lecName: `Figure Series Part-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/pocrB9kxGsg?si=mjr2ow3AdzPq7XMv`,
    notesAddress: null,
  },
  { 
    id: '0034',
    lecName: `Figure Series Part-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/L6LXY2_Ty9k?si=G-u3__aJKf9phryZ`,
    notesAddress: null,
  },
]
const reasoning_OOO_lectures = [
  { 
    id: '0035',
    lecName: `Odd One Out Part-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/Ofm33grY6F8?si=WWzRwrzfZCS4eDng`,
    notesAddress: null,
  },
  { 
    id: '0036',
    lecName: `Odd One Out Part-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/p0buOtEQNFk?si=sYaJTXSoGPhI92ip`,
    notesAddress: null,
  },
]
const reasoning_LS_lectures = [
  { 
    id: '0037',
    lecName: `Letter Series`,
    lecAddress: `https://www.youtube-nocookie.com/embed/RRTCE9dgKdE?si=_Pyu9jSWVsSxU7_v`,
    notesAddress: null,
  },
]
const reasoning_direction_lectures = [
  { 
    id: '0038',
    lecName: `Direction`,
    lecAddress: `https://www.youtube-nocookie.com/embed/DSsCkheNsb0?si=awU8397UArVn59FG`,
    notesAddress: null,
  },

] 
const reasoning_bloodRelation_lectures = [
  { 
    id: '0038.1',
    lecName: `Blood Relation Lec-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/bmJjHfnJHSY?si=utTQxLcPfN2BzLHd`,
    notesAddress: null,
  },
  { 
    id: '0038.2',
    lecName: `Blood Relation Lec-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/SSRJ8vQ8lnc?si=Ss5xBRG-DrnIKAzc`,
    notesAddress: null,
  },
]
const reasoning_clock_lectures = [
  { 
    id: '0038.1',
    lecName: `Clock`,
    lecAddress: `https://www.youtube-nocookie.com/embed/LS-VmcadNw8?si=vszfqXcv06QzndTI`,
    notesAddress: null,
  },
]
// Mathematics =========================================

const math_digitalSum_lectures = [
  { 
    id: '0039',
    lecName: `Digital sum part: 1`,
    lecAddress: `https://www.youtube.com/embed/mUp03J4F-fc?si=98WDcqXCNDgNAPUQ`,
    notesAddress: null,
  },
  { 
    id: '0040',
    lecName: `Digital sum part: 2`,
    lecAddress: `https://www.youtube.com/embed/kHjcmSFuw8U?si=a8sdUiWC772VX616`,
    notesAddress: null,
  },
  
]
// id: 0041 to 0043 alloted to numberSystem

const math_percentage_lectures = [
  { 
    id: '0044',
    lecName: `Percentage Lec: 1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/anhbMmxLSiU?si=Ci3qqt6Hbdv25WNx`,
    notesAddress: `../../mathsNotes/02 Percentage/01.pdf`,
  },
  { 
    id: '0045',
    lecName: `Percentage Lec: 2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/13lhhdfulYk?si=xY7OSzwKekcot9lC`,
    notesAddress: `../../mathsNotes/02 Percentage/02.pdf`,
  },
  { 
    id: '0046',
    lecName: `Percentage Lec: 3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/uIgfE1yWHMs?si=_altg3C3teQIL34i`,
    notesAddress: `../../mathsNotes/02 Percentage/03.pdf`,
  },
  { 
    id: '0047',
    lecName: `Percentage Lec: 4`,
    lecAddress: `https://www.youtube-nocookie.com/embed/HvwaRsvUwQI?si=nDxB-e15OkEl6k8Y`,
    notesAddress: `../../mathsNotes/02 Percentage/04.pdf`,
  },
  { 
    id: '0048',
    lecName: `Percentage Lec: 5`,
    lecAddress: `https://www.youtube-nocookie.com/embed/KNJntHXUrOA?si=DWsyu7U9qjiI9h8n`,
    notesAddress: `../../mathsNotes/02 Percentage/05.pdf`,
  },
  { 
    id: '0049',
    lecName: `Percentage Lec: 6`,
    lecAddress: `https://www.youtube-nocookie.com/embed/m5mKtzU7T9I?si=bmECFkHxLBKIgqjQ`,
    notesAddress: `../../mathsNotes/02 Percentage/06.pdf`,
  },
  { 
    id: '0050',
    lecName: `Percentage Lec: 7`,
    lecAddress: `https://www.youtube-nocookie.com/embed/kFsw5NbaN5s?si=FxdE9MlKENzkL5mU`,
    notesAddress: `../../mathsNotes/02 Percentage/07.pdf`,
  },

]

const math_profitAndLoss_lectures = [
  { 
    id: '0051',
    lecName: `Profit and Loss Lec: 1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/qeh_IpVwj2M?si=wkYhp8QReInrsxxT`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/01.pdf`,
  },
  { 
    id: '0052',
    lecName: `Profit and Loss Lec: 2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/ny8YWy_-aqA?si=VVGvEuKjZ51a57Q2`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/02.pdf`,
  },
  { 
    id: '0053',
    lecName: `Profit and Loss Lec: 3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/SuZH0OxsXE0?si=dfzsj8T7no4MIyU6`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/03.pdf`,
  },
  { 
    id: '0054',
    lecName: `Profit and Loss Lec: 4`,
    lecAddress: `https://www.youtube-nocookie.com/embed/XYiUKLNI4vE?si=hc3_hec8j3FKCjDm`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/04.pdf`,
  },
  { 
    id: '0055',
    lecName: `Profit and Loss Lec: 5`,
    lecAddress: `https://www.youtube-nocookie.com/embed/Fg9-Rl9IW80?si=8MfwceR5NppAxGYP`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/05.pdf`,
  },
  { 
    id: '0056',
    lecName: `Profit and Loss Lec: 6 (Dishonest shopkeeper)`,
    lecAddress: `https://www.youtube-nocookie.com/embed/ls_jv4bijB8?si=8urI5CuPR_IPg6P3`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/06.pdf`,
  },
  { 
    id: '0057',
    lecName: `Profit and Loss Lec: 7 (Discount)`,
    lecAddress: `https://www.youtube-nocookie.com/embed/CC1y4o4LSU8?si=spxG5UbAOPQ65cjs`,
    notesAddress: `../../mathsNotes/03 Profit and Loss/07.pdf`,
  },

]

const math_timeAndWork_lectures = [
  { 
    id: '0058',
    lecName: `Time and Work Lec: 1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/pj5Uj2YK8jE?si=uYui1RPcl0IptFNk`,
    notesAddress: `../../mathsNotes/04 Time and Work/01.pdf`,
  },
  { 
    id: '0059',
    lecName: `Time and Work Lec: 2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/Q6wtnDH6kPU?si=WY0AD9mj6F7Hqu1f`,
    notesAddress: `../../mathsNotes/04 Time and Work/02.pdf`,
  },
  { 
    id: '0060',
    lecName: `Time and Work Lec: 3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/xPVTEMUliAc?si=1HiTJEwWOJsqbOcY`,
    notesAddress: `../../mathsNotes/04 Time and Work/03.pdf`,
  },
  { 
    id: '0061',
    lecName: `Time and Work Lec: 4`,
    lecAddress: `https://www.youtube-nocookie.com/embed/-iVu8pGP1_Q?si=lRBNYWq93_NyR67l`,
    notesAddress: `../../mathsNotes/04 Time and Work/04.pdf`,
  },
  { 
    id: '0062',
    lecName: `Time and Work Lec: 5`,
    lecAddress: `https://www.youtube-nocookie.com/embed/X009AJd18i4?si=FWOqX_-CJFVGLmSQ`,
    notesAddress: `../../mathsNotes/04 Time and Work/05.pdf`,
  },
  { 
    id: '0063',
    lecName: `Time and Work Lec: 6`,
    lecAddress: `https://www.youtube-nocookie.com/embed/67iQIFwW_mE?si=JTrVB1E8hJGHmkGW`,
    notesAddress: `../../mathsNotes/04 Time and Work/06.pdf`,
  },

]

const math_workAndWages_lectures = [
  { 
    id: '0064',
    lecName: `Work and Wages`,
    lecAddress: `https://www.youtube-nocookie.com/embed/cDMKNoci7hQ?si=F7f2Ee3X0TdoBsMZ`,
    notesAddress: `../../mathsNotes/05 Work and Wages/01.pdf`,
  },
]
const math_pipeAndCistern_lectures = [
  { 
    id: '0065',
    lecName: `Pipe and Cistern Lec: 1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/XPTr8lb0YJA?si=gNdCYsmzVvKCRP4E`,
    notesAddress: `../../mathsNotes/06 Pipe and Cistern/01.pdf`,
  },
  { 
    id: '0066',
    lecName: `Pipe and Cistern Lec: 2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/o909cwUlHXo?si=EFjK6S5SgwvioF3r`,
    notesAddress: `../../mathsNotes/06 Pipe and Cistern/02.pdf`,
  },
]

const math_simpleInterest_lectures = [
  { 
    id: '0067',
    lecName: `Simple Interest Lec: 1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/PCRa-7CFzNU?si=FadBG8EfZk__3xG5`,
    notesAddress: `../../mathsNotes/07 Simple Interest/01.pdf`,
  },
  { 
    id: '0068',
    lecName: `Simple Interest Lec: 2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/4-SfmOsDBTs?si=dHz8W3wTM6ZoywSL`,
    notesAddress: `../../mathsNotes/07 Simple Interest/02.pdf`,
  },
  { 
    id: '0069',
    lecName: `Simple Interest Lec: 3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/YANZQk3x5V4?si=mAPL2MKTSFEP2Mug`,
    notesAddress: `../../mathsNotes/07 Simple Interest/03.pdf`,
  },
  { 
    id: '0070',
    lecName: `Simple Interest Lec: 4`,
    lecAddress: `https://www.youtube-nocookie.com/embed/_eNewkrefOU?si=cKl7wgjX0Rv2Z0kt`,
    notesAddress: `../../mathsNotes/07 Simple Interest/04.pdf`,
  },
  { 
    id: '0071',
    lecName: `Simple Interest Lec: 5`,
    lecAddress: `https://www.youtube-nocookie.com/embed/iTggTrrNsqc?si=jr7SNTtYGbeLUmQZ`,
    notesAddress: `../../mathsNotes/07 Simple Interest/05.pdf`,
  },
  { 
    id: '0072',
    lecName: `Simple Interest Lec: 6`,
    lecAddress: `https://www.youtube-nocookie.com/embed/ZSV_b0lUKvA?si=D-M6AbQ2gdFhHcNS`,
    notesAddress: `../../mathsNotes/07 Simple Interest/06.pdf`,
  },
  { 
    id: '0073',
    lecName: `MOCK TEST: 1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/i9o_hx8qQpM?si=z1zwED1GUJJaxWxO`,
    notesAddress: null,
  },
  { 
    id: '0074',
    lecName: `MOCK TEST: 2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/cCXWBKx4-xQ?si=Bas1bZurnmXjFDnz`,
    notesAddress: null,
  },
]

const math_compoundInterest_lectures = [
  { 
    id: '0075',
    lecName: `Compound Interest Lec: 1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/SjfhVlZgSNc?si=3uL1xsrSZpa40bzX`,
    notesAddress: `../../mathsNotes/08 Compound Interest/01.pdf`,
  },
  { 
    id: '0076',
    lecName: `Compound Interest Lec: 2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/TW94XT_CvMY?si=2hJvurhLNf6jg3H9`,
    notesAddress: `../../mathsNotes/08 Compound Interest/02.pdf`,
  },
  { 
    id: '0077',
    lecName: `Compound Interest Lec: 3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/uJ1QJiZTsHI?si=GjnOCoVxL0-dN6mQ`,
    notesAddress: `../../mathsNotes/08 Compound Interest/03.pdf`,
  },
  { 
    id: '0078',
    lecName: `Compound Interest Lec: 4`,
    lecAddress: `https://www.youtube-nocookie.com/embed/gajpqoB9s3c?si=fM00jFInishlsMpX`,
    notesAddress: `../../mathsNotes/08 Compound Interest/04.pdf`,
  },
]
const math_average_lectures = [
  { 
    id: '0078.01',
    lecName: `Average one shot (8hr: 26min) <span class="recommended-tagged-lec">Recomended</span>`,
    lecAddress: `https://www.youtube-nocookie.com/embed/I4NO0Nfj-Qg?si=HCPgmRn85QKINbwq`,
    notesAddress: `..`,
  },
  { 
    id: '0078.02',
    lecName: `Average Lec-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/bU4bY2mNoY4?si=U_BSGreWfgBoonZz`,
    notesAddress: `../../mathsNotes/09 Average/01.pdf`,
  },
  { 
    id: '0078.03',
    lecName: `Average Lec-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/_4yibcVGI2M?si=1mOBBF3JtlOijtoV`,
    notesAddress: `../../mathsNotes/09 Average/02.pdf`,
  },
  { 
    id: '0078.04',
    lecName: `Average Lec-3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/8exFhCUwm3k?si=GUEjtg4wJ-Wb3k60`,
    notesAddress: `../../mathsNotes/09 Average/03.pdf`,
  },
  { 
    id: '0078.99',
    lecName: `MOCK TEST`,
    lecAddress: `https://www.youtube-nocookie.com/embed/E30RYf6KtoQ?si=BlX433LtzwTbdAcy`,
    notesAddress: ``,
  },
  { 
    id: '0078.05',
    lecName: `Average Lec-4`,
    lecAddress: `https://www.youtube-nocookie.com/embed/jlKS1zyx0e4?si=yFTLRAMhLa-ozKj6`,
    notesAddress: `../../mathsNotes/09 Average/04.pdf`,
  },
  { 
    id: '0078.06',
    lecName: `Average Lec-5`,
    lecAddress: `https://www.youtube-nocookie.com/embed/KRxbHvyyogY?si=_WTVTB3VWmUm2sog`,
    notesAddress: `../../mathsNotes/09 Average/05.pdf`,
  },
]
const math_ratio_lectures = [
  { 
    id: '0078.07',
    lecName: `Ratio Lec-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/NrnHmcN4hRQ?si=kRFcfnk5rmGcsIuC`,
    notesAddress: `../../mathsNotes/10 Ratio/01.pdf`,
  },
  { 
    id: '0078.08',
    lecName: `Ratio Lec-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/twUJMh2FHM4?si=_CCkUS0gA1OFZPs-`,
    notesAddress: `../../mathsNotes/10 Ratio/02.pdf`,
  },
  { 
    id: '0078.09',
    lecName: `Ratio Lec-3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/ltSjlILp4SA?si=5aAaZsSDoxmaQF-k`,
    notesAddress: `../../mathsNotes/10 Ratio/03.pdf`,
  },
]
const math_ages_lectures = [
  { 
    id: '0078.10',
    lecName: `Ages Lec-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/vTFebZTvv2w?si=RP-TAr4Dgr57alxZ`,
    notesAddress: `../../mathsNotes/11 Ages/01.pdf`,
  },
]
const math_partnership_lectures = [
  { 
    id: '0078.11',
    lecName: `Partnership Lec-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/2KKMymxq7zk?si=Gq7TgwUOHjbDBeZe`,
    notesAddress: `../../mathsNotes/12 Partnership/01.pdf`,
  },
]
const math_proportion_lectures = [
  { 
    id: '0078.12',
    lecName: `Proportion Lec-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/NsNBeNvDHVE?si=USe1FMVyAeDsIoZh`,
    notesAddress: `../../mathsNotes/13 Proportion/01.pdf`,
  },
]
const math_algebra_lectures = [
  { 
    id: '0078.13',
    lecName: `Algebra Lec-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/MI9ChRyshlk?si=6PXm3_xg2mS-Gmes`,
    notesAddress: `../../mathsNotes/14 Algebra/01.pdf`,
  },
  { 
    id: '0078.14',
    lecName: `Algebra Lec-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/FERFAxALH9M?si=QjQNyyZ21n8ow0tS`,
    notesAddress: `../../mathsNotes/14 Algebra/02.pdf`,
  },
  { 
    id: '0078.15',
    lecName: `Algebra Lec-3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/lwO11lKt6VI?si=gZuco0qb3jkTDzsi`,
    notesAddress: `../../mathsNotes/14 Algebra/03.pdf`,
  },
]
const math_trignometry_lectures = [
  { 
  id: '0078.16',
  lecName: `Trignometry Lec-1`,
  lecAddress: `https://www.youtube-nocookie.com/embed/Ihu9WtyLOj0?si=kEWk-Tk74vH6Ah4R`,
  notesAddress: `../../mathsNotes/15 Trignometry/01.pdf`,
  },
  { 
  id: '0078.17',
  lecName: `Trignometry Lec-2`,
  lecAddress: `https://www.youtube-nocookie.com/embed/ivBhDxcJrfQ?si=zanNmIQLhHmLgo7f`,
  notesAddress: `../../mathsNotes/15 Trignometry/02.pdf`,
  },
  { 
  id: '0078.18',
  lecName: `Trignometry Lec-3`,
  lecAddress: `https://www.youtube-nocookie.com/embed/V-0Rl2OhOw4?si=jJfKnjfaP-g6Fx7k`,
  notesAddress: `../../mathsNotes/15 Trignometry/03.pdf`,
  },
  { 
  id: '0078.19',
  lecName: `Trignometry Lec-4`,
  lecAddress: `https://www.youtube-nocookie.com/embed/QFmkpwJ2b0I?si=_k6oCheZXU8DDSzH`,
  notesAddress: `../../mathsNotes/15 Trignometry/04.pdf`,
  },
  { 
  id: '0078.20',
  lecName: `MOCK TEST`,
  lecAddress: `https://www.youtube-nocookie.com/embed/ZYkBqwSUFXk?si=vCZsQhTMLS1RKrh_`,
  notesAddress: ``,
  },
]
const math_numberSystem_lectures = [
  { 
    id: '0041',
    lecName: `Number System Lec: 1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/I80183rrvZY?si=FyXGBbUSYh_zzmnC`,
    notesAddress: `../../mathsNotes/16 Number System/01.pdf`,
  },
  { 
    id: '0042',
    lecName: `Number System Lec: 2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/oe4SLyTtkx0?si=iSgj13nAtG1MASVF`,
    notesAddress: `../../mathsNotes/16 Number System/02.pdf`,
  },
  { 
    id: '0043',
    lecName: `Number System Lec: 3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/MEYeGkluOsc?si=3j_4Jx3EwcXHeUer`,
    notesAddress: `../../mathsNotes/16 Number System/03.pdf`,
  },
]
const math_LCMandHCF_lectures = [
  { 
    id: '0078.21',
    lecName: `HCF and LCM`,
    lecAddress: `https://www.youtube-nocookie.com/embed/OxOAeP3Xjc0?si=NgTIp7l4OUk-9yh9`,
    notesAddress: `../../mathsNotes/17 LCM and HCF/01.pdf`,
  },
]
const math_Geometry_lectures = [
  { 
    id: '0078.22',
    lecName: `Geometry Lec-1`,
    lecAddress: `https://www.youtube-nocookie.com/embed/ozvaG4rwJJI?si=jdWPzKJLxaKOY-GF`,
    notesAddress: `../../mathsNotes/18 Geometry/01.pdf`,
  },
  { 
    id: '0078.23',
    lecName: `Geometry Lec-2`,
    lecAddress: `https://www.youtube-nocookie.com/embed/z5h3X3ke7E0?si=1p6-qbSBz36cGCQ7`,
    notesAddress: `../../mathsNotes/18 Geometry/02.pdf`,
  },
  { 
    id: '0078.24',
    lecName: `Geometry Lec-3`,
    lecAddress: `https://www.youtube-nocookie.com/embed/qhr86lhQtV4?si=VaIAJ9K1ePOOt4Xo`,
    notesAddress: `../../mathsNotes/18 Geometry/03.pdf`,
  },
  { 
    id: '0078.25',
    lecName: `Geometry Lec-4`,
    lecAddress: `https://www.youtube-nocookie.com/embed/EbEVcqCkSz8?si=B_RspEy6AS8rHRCB`,
    notesAddress: `../../mathsNotes/18 Geometry/04.pdf`,
  },
  { 
    id: '0078.26',
    lecName: `MOCK TEST`,
    lecAddress: `https://www.youtube-nocookie.com/embed/iTDqvipfnoM?si=yWQFB5rA1PM9GYdq`,
    notesAddress: `../../mathsNotes/18 Geometry/DAY 32 MOCK TEST 02 (60 Days 60 Marathon).pdf`,
  },
]
const math_mensuration2D_lectures = [
  { 
    id: '0078.27',
    lecName: `Mensuration 2D Lec-1 (Triangle)`,
    lecAddress: `https://www.youtube-nocookie.com/embed/SQh5osKPLQA?si=9dSWgTSbn1qnItUS`,
    notesAddress: `../../mathsNotes/19 Mensuration 2D/01.pdf`,
  },
  { 
    id: '0078.28',
    lecName: `Mensuration 2D Lec-2 (Circle)`,
    lecAddress: `https://www.youtube-nocookie.com/embed/TsIzzF1ueHg?si=5-65JWUGIJKchPHb`,
    notesAddress: `../../mathsNotes/19 Mensuration 2D/02.pdf`,
  },
  { 
    id: '0078.29',
    lecName: `Mensuration 2D Lec-3 (Quadrilateral)`,
    lecAddress: `https://www.youtube-nocookie.com/embed/xkOz3r_dgsc?si=7tKp2jLqHyoV3H9q`,
    notesAddress: `../../mathsNotes/19 Mensuration 2D/03.pdf`,
  },
  { 
    id: '0078.30',
    lecName: `SAMPLE PAPER`,
    lecAddress: `https://www.youtube-nocookie.com/embed/xZobm21ovcM?si=SKoljFHZcxgnfgwD`,
    notesAddress: ``,
  },
]
const math_mensuration3D_lectures = [
  { 
    id: '0078.31',
    lecName: `Mensuration 3D Lec-1 (Sphere)`,
    lecAddress: `https://www.youtube-nocookie.com/embed/umd-m08t_JU?si=ROyUe5H69C6nTFo1`,
    notesAddress: `../../mathsNotes/20 Mensuration 3D/01 (sphere).pdf`,
  },
  { 
    id: '0078.32',
    lecName: `Mensuration 3D Lec-2 (Cone)`,
    lecAddress: `https://www.youtube-nocookie.com/embed/SKpycNIqF_Q?si=exwwRffemYGQxpsg`,
    notesAddress: `../../mathsNotes/20 Mensuration 3D/02 (cone).pdf`,
  },
]

// ============================= ENGLISH ==================================
const english_allContent_lectures = [
  { 
    id: '0079',
    lecName: `Preposition`,
    lecAddress: `https://www.youtube-nocookie.com/embed/MZpgqzBKZfw?si=m5M23A2LG1XYALke`,
    notesAddress: `../englishNotes/01 Preposition/preposition.pdf`,
  },
] 

const gs_allContent_lectures = [
  {
    id: '0080',
    lecName: `Indian Classical Dance (शास्त्रीय नृत्य)`,
    lecAddress: `https://www.youtube-nocookie.com/embed/2tEkjfq7ayQ?si=YaRZq4M4qIxNP2dx`,
    notesAddress: `../../chapters/gsNotes/01 Classical and folk dance/Classical and folk dances of India.pdf`,
  },
  {
    id: '0081',
    lecName: `Folk Dance (लोक नृत्य)`,
    lecAddress: `https://www.youtube-nocookie.com/embed/0pGAFRprdGA?si=EbE5rBraroC6l6EU`,
    notesAddress: `../../chapters/gsNotes/01 Classical and folk dance/Classical and folk dances of India.pdf`,
  },
  {
    id: '0082',
    lecName: `Folk Dance (लोक नृत्य) Questions Practice`,
    lecAddress: `https://www.youtube-nocookie.com/embed/cXTC_aVEjhA?si=06sdUSLEHmgqHCQ7`,
    notesAddress: `../../chapters/gsNotes/01 Classical and folk dance/Classical and folk dances of India.pdf`,
  },
]

const gs_History_lectures = [
  {
    id: '0083',
    lecName: `7 घंटे में Complete History का निचोड़ (सम्पूर्ण इतिहास) || CGL & RRB में इस से बाहर नहीं पूछा जायेगा`,
    lecAddress: `https://www.youtube-nocookie.com/embed/VH6HqJsM560?si=y4BEEr2uFWV-Y6GW`,
    notesAddress: `../../chapters/gsNotes/02_Geography/Lec_1 classnote.pdf`,
  },
]
const gs_Geo_lectures = [
  {
    id: '0084',
    lecName: `SOLAR SYSTEM LEC-1 | PARMAR GK BATCH 3.0 | PARMAR SSC`,
    lecAddress: `https://www.youtube-nocookie.com/embed/itXqdUKaM0k?si=UeNE5bT9f5yLa2gf`,
    notesAddress: `../../chapters/gsNotes/02_Geography/Lec_1 classnote.pdf`,
  },
  {
    id: '0085',
    lecName: `LATITUDE - LONGITUDE & ROTATION - REVOLUTION | LEC-2 | PARMAR SSC`,
    lecAddress: `https://www.youtube-nocookie.com/embed/Chc0A2NUv8Q?si=q6neB6N2F0QvYXOY`,
    notesAddress: `../../chapters/gsNotes/02_Geography/Lec_2_classnote.pdf`,
  },
  {
    id: '0086',
    lecName: `EARTH'S INTERIOR & TECTONIC PLATE | LEC-3 | PARMAR SSC`,
    lecAddress: ``,
    notesAddress: `../../chapters/gsNotes/02_Geography/Lec_3_classnote.pdf`,
  },
  {
    id: '0087',
    lecName: `ROCKS, CONTINETS & OCEANS | LEC-4 | PARMAR SSC`,
    lecAddress: ``,
    notesAddress: `../../chapters/gsNotes/02_Geography/Lec_4_classnote.pdf`,
  },
  {
    id: '0088',
    lecName: `GEOMORPHOLOGY & LANDFORMS | LEC-5 | PARMAR SSC`,
    lecAddress: ``,
    notesAddress: `../../chapters/gsNotes/02_Geography/Lec_5_classnote.pdf`,
  },
  {
    id: '0089',
    lecName: `ATMOSPHERE AND WATER IN ATMOSPHERE | LEC-6 | PARMAR SSC`,
    lecAddress: ``,
    notesAddress: `../../chapters/gsNotes/02_Geography/Lec_6_classnote.pdf`,
  },
  {
    id: '0090',
    lecName: `WIND, CYCLONE AND OCEAN CURRENTS | LEC-7 | PARMAR SSC`,
    lecAddress: ``,
    notesAddress: `../../chapters/gsNotes/02_Geography/Lec_7_classnote.pdf`,
  },
]
/* <a href="/pdf-redirect.html?pdf=../gsNotes/02%20Geography/Lec_2%20classnote.pdf">Open PDF</a> */