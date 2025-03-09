let count = 0
let arr = [2, 6, 0, 3, 2, 0, 0, 6, 1, 8]
let num = + prompt(`mời nhập vào số `)
for (let i = 0; i < 10; i++) {
    if (arr[i] === num) {
        count++
    }
}
console.log(`Số ` + num + ` xuất hiện ` + count + ` lần`)