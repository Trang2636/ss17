let num = +(prompt("Nhập vào một chuỗi số nguyên gồm 3 chữ sốsố"));  
let check = true;  
if (Number.isInteger(num)) {  
    let strNum = num.toString();   
    for (let i = 0; i < strNum.length; i++) {  
        if (strNum[i] !== strNum[strNum.length - i - 1]) {  
            check = false;  
            break;  
        }  
    }  
    if (check) {  
        alert("Là số đối xứng");  
    } else {  
        alert("Không phải số đối xứng");  
    }  
} else {  
    alert("Số không hợp lệ");  
}  