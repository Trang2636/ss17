let a = +prompt("nhập số a");
let b = +prompt("nhập số b");
let c = +prompt("nhập số c");
if ( isNaN(a) || isNaN(b) || isNaN(c) ){
    alert(`Không hợp lệ`)
}
let max = +Math.max(a,b,c);
alert(`Số lớn nhất trong 3 số đã nhập là: ${max}`);