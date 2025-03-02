let salary = Number(prompt(`Moi nhap vao so luong:`));
let rate1 =salary*0.05;
if(salary<5000000){
    alert(`Thue cua ban la 0VND`);
}else if(salary<10000000){
alert(`Thue cua ban la ${rate1.toLocaleString(`vi-VN`)}VND`);
}else if( salary<18000000){
    alert(`Thue cua ban la ${salary * 0.1}VND`);
}else if( salary<32000000){
    alert(`Thue cua ban la ${salary * 0.15}VND`);
}else {
    alert(`Thue cua ban la ${salary * 0.2}VND`)
}