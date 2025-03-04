let month = +prompt("mời nhập tháng")
if (month <= 3) {
    alert("MMùa xuân");
} else if (month <= 6) {
    alert("MMùa hạ");
} else if (month <= 9) {
    alert("MMùa thu");
} else if (month <= 12) {
    alert("MMùa đông");
} else {
    alert("tháng không tồn tại");
}