let date1 = new Date(`2006-03-26`);
let date2 = new Date(`2006-03-27`);
let calc = date2 - date1;
let convert = calc /(1000*60*60*24);
alert(convert)