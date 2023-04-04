function updateclock(){ 
    var now = new Date();
    var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";
    var months = ["January,February,March,April,May,June,July,August,September,October,November,December"];
    var week =["Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday"];
    var ids =["dayname,month,daynum,year,hour,minutes,seconds,period"];
    var values =[dname,mo,dnum,yr,hou,min,sec,pe];
    for(var i=0;i<ids.length;i++){
    document.getElementById(ids[i]).firstChild.nodeValue =values[i];

    }
} 
function initclock(){
    updateclock();
    window.setInterval("updateclock()",1);
}