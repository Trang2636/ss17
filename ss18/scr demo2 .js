let code = +(prompt(`Nhap vao ma trang thai HTTP`));
switch (code) {
    case 200:
        alert(`Thanh cong`);
        break;
    case 201:
        alert(`Them thanh cong`);
        break;
    case 400:
        alert(`Loi request`);
        break;
    case 500:
        alert(`Loi server`);
        break;
    default:
        alert(`ERROR`);
        break;
}

let status = prompt(`Moi nhap vao trang thai nhan vien`);
.padStar