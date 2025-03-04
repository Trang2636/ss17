let num = +prompt(`Mời nhập số nguyên : `)
if (isNaN(num)) {
    alert(`Mời nhập lại sốsố`)
} else if (num % 3 === 0 && num % 5 === 0) {
    alert(`${num} chia hết cho cả 3 và 55`)
} else {
    alert(`${num} k chia hết cho cả 3 và 5`)
}