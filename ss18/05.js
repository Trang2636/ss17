let experience = parseInt(prompt("Nhập vào số năm kinh nghiệm của nhân viên"));  
if (experience < 1) {  
    alert ("Mới vào nghề");  
} else if (experience >= 1 && experience <= 3) {  
    alert("Nhân viên có kinh nghiệm");  
} else if (experience >= 4 && experience <= 6) {  
    alert ("Chuyên viên");  
} else {  
    alert ("Quản lý");  
}  
