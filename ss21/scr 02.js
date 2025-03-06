let evenNumber=0
let oddNumber=0
for (let i = 0; i < 5; i++) {
    let num = +prompt(`Moi ban nhap vao so thu` + (i + 1))
    if (num % 2 === 0) {
        evenNumber++
    } else {
        oddNumber++
    }
}
console.log(`so chan la `+ evenNumber)
console.log(`so le la `+ oddNumber)