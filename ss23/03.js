let arr = []
let count = 0
let num = +prompt(`Moi nhap vao so phan tu muon them`)
if ( num <0 ){
    console.log ( `so luong phan tu k hop le`)
    loop = false
}else if(num ===0){
    console.log ( `mang k co phan tu`)
    loop = false
}else{
    for ( let i=0 ; i<num ; i++){
        arr[i]= + prompt(`moi nhap vao phan tu`)
        if (arr[i]<0){
        count ++
        }
}
}
