let num = +prompt("Nhập một số nguyên") 
let check = true 
if (isNaN(num) || num < 2) {  
    console.log("Số không hợp lệ");  
} else {  
    for (let i = 2; i < num; i++) {   
        if (num % i === 0) {  
            check = false;      
        }  
    }  
    if (check) {  
        console.log(num + " là số nguyên tố");  
    } else {  
        console.log(num + " không là số nguyên tố");  
    }  
}  