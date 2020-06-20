let topicsArray = [
    "網頁整合Bootstrap",
    "網頁整合Bootstrap",
    "網站上線Github",
    "網站內容修改",
    "網站期末報告",
    "提前放暑假?",
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1, startDay);
    //時間先忽略(時分秒這個例子不會用到)，設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

//先在程式碼中直接指定社團課程第一天(給社長用的)
setMonthAndDay(5,25);