let count = +prompt("Mời bạn nhập vào số phần tử muốn thêm");  
let arr = [];  

for (let i = 0; i < count; i++) {  
  let num = prompt(`Mời nhập vào phần tử thứ ${i + 1}: `);  
  arr.push(num);  
}  

arr.reverse();  
console.log(arr);