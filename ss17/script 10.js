let n = parseInt(prompt(`Nhập vào 1 số nguyên`));
let result = Number.isInteger(Math.sqrt(n))? `${n} là số chính phương `: `${n} không là số chính phương `;
alert(result);