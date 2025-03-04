let char = prompt("Mời nhập vào kí tự :")
if (char.length!==1){
    alert(`Kí tự màmà`)
}else if( char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z'){
    alert(`Kí tự là chữ cái `)
}else{
    alert(`Kí tự k là chữ cái`)
}