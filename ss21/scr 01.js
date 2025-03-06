let sum = 0
for (i = 0; i < 5; i++) {
    let a = Number(prompt(`Moi nhap vao so nguyen`))
    if (isNaN(a) || !(Number.isInteger(a))) {
        alert(`khong hop le`)
    } else {
        if (a % 2 !== 0) {
            sum += a
        }
    }
}
alert("tổng các số lẻ: "+ sum);
