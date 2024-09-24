
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

const reasoning_allContent_lectures = [
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
  { 
    id: '0011',
    lecName: `Ranking Arrangement`,
    lecAddress: `https://www.youtube-nocookie.com/embed/2ivIPqjZe1Q?si=FMHmFdjgJLnTh2w3`,
    notesAddress: null,
  },
  { 
    id: '0012',
    lecName: `Dice`,
    lecAddress: `https://www.youtube-nocookie.com/embed/HMvk6ggn8GQ?si=y_Q_xDhNs5AFrHC`,
    notesAddress: null,
  },
  { 
    id: '0013',
    lecName: `Calendar`,
    lecAddress: `https://www.youtube-nocookie.com/embed/gCOshTqyFGo?si=jHoVt2LIawb23jdZ`,
    notesAddress: null,
  },
  { 
    id: '0014',
    lecName: `Mirror and Water Image`,
    lecAddress: `https://www.youtube-nocookie.com/embed/nUIDOEL0S4E?si=UigWKotsgGBPY7Cw`,
    notesAddress: null,
  },
  { 
    id: '0015',
    lecName: `REVISION`,
    lecAddress: `https://www.youtube-nocookie.com/embed/k7Cos7gj9Bc?si=fPrKqvMN1clo515b`,
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
  { 
    id: '0018',
    lecName: `Number Analogy and Similarity`,
    lecAddress: `https://www.youtube-nocookie.com/embed/BoMRZlWXIrs?si=QNXRP20ACM69Zd13`,
    notesAddress: null,
  },
  { 
    id: '0019',
    lecName: `Letter Analogy`,
    lecAddress: `https://www.youtube-nocookie.com/embed/kn0sGyilV60?si=AlGItNAS65gaj_tx`,
    notesAddress: null,
  },
  { 
    id: '0020',
    lecName: `Similarity`,
    lecAddress: `https://www.youtube-nocookie.com/embed/vn2k1sd_sFU?si=0uBl-EwiMdH3gLWO`,
    notesAddress: null,
  },
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
  { 
    id: '0025',
    lecName: `Alphabet Test`,
    lecAddress: `https://www.youtube-nocookie.com/embed/SMW0xJf2o4Y?si=GRamLF82jAkHY4SU`,
    notesAddress: null,
  },
  { 
    id: '0026',
    lecName: `Paper Cutting and Folding`,
    lecAddress: `https://www.youtube-nocookie.com/embed/54UMaqjs-QM?si=nq4KnozcoCh60xm3`,
    notesAddress: null,
  },
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
  { 
    id: '0029',
    lecName: `Arrangement of Words`,
    lecAddress: `https://www.youtube-nocookie.com/embed/nG7zEifoW_0?si=TFHyjUguE8CgdCwu`,
    notesAddress: null,
  },
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
  { 
    id: '0032',
    lecName: `Reasoning Marathon`,
    lecAddress: `https://www.youtube-nocookie.com/embed/n0LOpxYT0t8?si=oOlkeTFwajco4GCa`,
    notesAddress: null,
  },
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
  { 
    id: '0037',
    lecName: `Letter Series`,
    lecAddress: `https://www.youtube-nocookie.com/embed/RRTCE9dgKdE?si=_Pyu9jSWVsSxU7_v`,
    notesAddress: null,
  },
  { 
    id: '0038',
    lecName: `Direction`,
    lecAddress: `https://www.youtube-nocookie.com/embed/DSsCkheNsb0?si=awU8397UArVn59FG`,
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
    notesAddress: `../gsNotes/01 Classical and folk dance/Classical and folk dances of India.pdf`,
  },
  {
    id: '0081',
    lecName: `Folk Dance (लोक नृत्य)`,
    lecAddress: `https://www.youtube-nocookie.com/embed/0pGAFRprdGA?si=EbE5rBraroC6l6EU`,
    notesAddress: `../gsNotes/01 Classical and folk dance/Classical and folk dances of India.pdf`,
  },
  {
    id: '0082',
    lecName: `Folk Dance (लोक नृत्य) Questions Practice`,
    lecAddress: `https://www.youtube-nocookie.com/embed/cXTC_aVEjhA?si=06sdUSLEHmgqHCQ7`,
    notesAddress: `../gsNotes/01 Classical and folk dance/Classical and folk dances of India.pdf`,
  },
]