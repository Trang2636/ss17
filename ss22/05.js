let arr = [1, 8, 4, 9, 4]
let evenSum = 0
let oddSum = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenSum += arr[i]
    } else {
        oddSum += arr[i]
    }
}
console.log(`Tổng các số chẵn là `+ evenSum)
console.log(`Tổng các số lẻ là `+ oddSum)
