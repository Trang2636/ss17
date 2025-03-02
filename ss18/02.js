let math = +prompt(" Điểm toán: ")
let lit = +prompt(" Điểm văn: ")
let eng = +prompt(" Điểm anh: ")
let avg = (math + lit + eng)/3
if(avg>=8){
    alert(`Học lực: Gioỉ`)
}else if(avg>=6.5){
    alert(`Học lực: Khá`)
}else if(avg>=5){
    alert(`Học lực: TB`)
}else if(5>avg){
    alert(`Học lực: Yếu`)
}else{
    alert(`Mời nhập lại`)
}