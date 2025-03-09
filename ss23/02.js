let arr = []
for (let i=0; i<10; i++) {
    arr[i]= parseInt(prompt(`Nhap phan tu thu ${i+1}`))
    if (isNaN(arr[i])) {
        console.log("Khong co so lon nhat")
        break
    }
}
console.log(arr)
let max = arr[0]
let index = 0
if (arr.length>0) {
    for (let i=1; i<arr.length; i++) {
        if (arr[i]>max) {
            max=arr[i];
            index=i;
        }
    }
    console.log("So lon nhat: " + max);  
    console.log("Vi tri: " + index);  
} else {  
    console.log("Khong co so lon nhat"); 
}