let num = +prompt(`Moi ban nhap vao so nguyen`)
if (isNaN(num)) {
    alert(`k hop le`)
} else {
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            console.log("ước của " + num + " là " + i);
        }
    }
}
