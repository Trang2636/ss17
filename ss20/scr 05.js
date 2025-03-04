let a = +prompt("Mời nhập số nguyên");
let b = +prompt("mời nhập số mũ");
let result=1;
if (isNaN(a) || isNaN(b)) {
    alert("Sai oif")
} else {
    for (let i = 0; i <b;i++){
        result*=a; 
    }
    alert(result);
}