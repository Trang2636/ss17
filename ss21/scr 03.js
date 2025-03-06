let password = `OMG`
let input;
while (input !== password) {
    input = prompt(`Moi nhap vao pass`)
    if (input === password) {
        console.log(`correct`)
    }
}