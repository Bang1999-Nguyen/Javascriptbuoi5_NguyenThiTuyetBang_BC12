// BÀI 1: QUẢN LÝ TUYỂN SINH
var getEle = function(id){
    return document.getElementById(id);
}
var khuVucA = getEle('khuVucA');
var idkhuVucA = getEle('idkhuVucA');
var khuVucB = getEle('khuVucB');
var idkhuVucB = getEle('idkhuVucB');
var khuVucC = getEle('khuVucC');
var idkhuVucC = getEle('idkhuVucC');
var khuVucD = getEle('khuVucD');
var idkhuVucD = getEle('idkhuVucD');
var doiTuongMot = getEle('doiTuongMot');
var iddoiTuongMot = getEle('iddoiTuongMot');
var doiTuongHai = getEle('doiTuongHai');
var iddoiTuongHai = getEle('iddoiTuongHai');
var doiTuongBa = getEle('doiTuongBa');
var iddoiTuongBa = getEle('iddoiTuongBa');
var doiTuongTu = getEle('doiTuongTu');
var iddoiTuongTu = getEle('iddoiTuongTu');
var tongDiem = getEle('tongDiem');
tongDiem.style.display = 'none';
var ketQuaDiem = getEle('ketQuaDiem');
var ketQua = getEle('ketQua');
ketQua.style.display = 'none';
var thongTinKetQua = getEle('thongTinKetQua');
var btntongDiem = getEle('btntongDiem');
var tinhTongDiem = function(diemToan, diemAnh, diemVan){
    var tongDiemTatCa = 0;
    if(idkhuVucA.checked){
        if(iddoiTuongMot.checked){
            tongDiemTatCa = 2 + 2.5 + diemToan + diemVan + diemAnh;
        }else if(iddoiTuongHai.checked){
            tongDiemTatCa = 2 + 1.5 + diemToan + diemVan + diemAnh;
        }else if(iddoiTuongBa.checked){
            tongDiemTatCa = 2 + 1 + diemAnh + diemToan + diemVan;
        }else{
            tongDiemTatCa = 2 + diemVan + diemToan + diemAnh;
        }
    }else if(idkhuVucB.checked){
        if(iddoiTuongMot.checked){
            tongDiemTatCa = 1 + 2.5 + diemToan + diemVan + diemAnh;
        }else if(iddoiTuongHai.checked){
            tongDiemTatCa = 1 + 1.5 + diemAnh + diemToan + diemVan;
        }else if(iddoiTuongBa.checked){
            tongDiemTatCa = 1 + 1 + diemVan + diemToan + diemAnh;
        }else{
            tongDiemTatCa = 1 + diemToan + diemVan + diemAnh;
        }
    }else if(idkhuVucC.checked){
        if(iddoiTuongMot.checked){
            tongDiemTatCa = 0.5 + 2.5 + diemToan + diemVan + diemAnh;
        }else if(iddoiTuongHai.checked){
            tongDiemTatCa = 0.5 + 1.5 + diemAnh + diemToan + diemVan;
        }else if(iddoiTuongBa.checked){
            tongDiemTatCa = 0.5 + 1 + diemVan + diemToan + diemAnh;
        }else{
            tongDiemTatCa = 0.5 + diemAnh + diemToan + diemVan;
        }
    }else if(idkhuVucD.checked){
        if(iddoiTuongMot.checked){
            tongDiemTatCa = 2.5 + diemVan + diemToan + diemAnh;
        }else if(iddoiTuongHai.checked){
            tongDiemTatCa = 1.5 + diemAnh + diemToan + diemVan;
        }else if(iddoiTuongBa.checked){
            tongDiemTatCa = 1 + diemVan + diemToan + diemAnh;
        }else{
            tongDiemTatCa = diemToan + diemVan + diemAnh;
        }
    }else{
        alert('Bạn chưa chọn khu vực ưu tiên')
    };
    return tongDiemTatCa;
}
// Tính tổng điểm
btntongDiem.onclick = function(){
    var diemChuan = getEle('diemChuan').value;
    var diemToan = getEle('diemToan').value;
    var diemAnh = getEle('diemAnh').value;
    var diemVan = getEle('diemVan').value;
    diemToan = parseFloat(diemToan);
    diemAnh= parseFloat(diemAnh);
    diemVan = parseFloat(diemVan);
    if(isNaN(diemToan) || isNaN(diemVan) || isNaN(diemChuan) ||isNaN(diemAnh)){
            alert('Vui lòng nhập vào các ô điểm là các số');
     }else{
            if(diemChuan < 0 || diemChuan > 34.5){
                alert('Nhập điểm chuẩn trong khoảng từ 0 đến 34.5')
            }else{
               if(diemToan > 10 || diemVan > 10 || diemAnh > 10){
                   alert('Điểm tối đa của mỗi môn thi là 10')
               }else{
                    var tongDiemTatCa = tinhTongDiem(diemToan, diemAnh, diemVan);
                    if(idkhuVucA.checked || idkhuVucB.checked || idkhuVucC.checked || idkhuVucD.checked){
                        if(iddoiTuongMot.checked || iddoiTuongHai.checked || iddoiTuongBa.checked || iddoiTuongTu.checked){
                        tongDiem.style.display = 'block';
                        ketQuaDiem.innerHTML = tongDiemTatCa + ' điểm ';
                    //  alert(tongDiem)
                     }else{
                     alert('Vui lòng chọn đối tượng ưu tiên');
                     }
                 }
               }
            }
        }
    }
// Kết quả đậu rớt
getEle('btnketQua').onclick = function(){
    var diemChuan = getEle('diemChuan').value;
    var diemToan = document.getElementById('diemToan').value;
    var diemAnh = document.getElementById('diemAnh').value;
    var diemVan = document.getElementById('diemVan').value;
    diemToan = parseFloat(diemToan);
    diemAnh= parseFloat(diemAnh);
    diemVan = parseFloat(diemVan);
    var tongDiemTatCa = tinhTongDiem(diemToan, diemAnh, diemVan);
    // in kết quả
    if(idkhuVucA.checked || idkhuVucB.checked || idkhuVucC.checked || idkhuVucD.checked){
        if(iddoiTuongMot.checked || iddoiTuongHai.checked || iddoiTuongBa.checked || iddoiTuongTu.checked){
           if(tongDiemTatCa >= diemChuan && diemVan != 0 &&diemToan != 0 && diemAnh != 0){
               ketQua.style.display = 'block';
               thongTinKetQua.innerHTML = ('Chúc mừng bạn đã trúng tuyển');
           }else{
            ketQua.style.display = 'block';
            thongTinKetQua.innerHTML = ('Rất tiếc bạn đã không trúng tuyển');
           }
       //  alert(tongDiem)
        }else{
            alert('Vui lòng chọn đối tượng ưu tiên');
        }
   }
}
// END BÀI 1

// BÀI 2: TÍNH TIỀN ĐIỆN
var tinhTongTienDien = function(soKw){
    var tongThanhTien = 0;
    if(soKw <= 50){
        tongThanhTien = 500 * soKw;
    }else if(soKw <= 100){
        tongThanhTien = (500 * 50) + ((soKw - 50) * 650);
    }else if(soKw <= 200){
        tongThanhTien = (500 * 50) + (50 * 650 ) + ((soKw - 100) * 850);
    }else if(soKw <= 350){
        tongThanhTien = (500 * 50) + (50 * 650) + (100 * 850) + ((soKw - 200) * 1100);
    }else{
        tongThanhTien = (500 * 50) + (50 * 650)+ (100 * 850) + (150 * 1100) +((soKw - 350) * 1300);
    };
    return tongThanhTien;
}
var divThanhTien = getEle('divThanhTien');
divThanhTien.style.display = 'none';
var divhoaDon = getEle('divhoaDon');
divhoaDon.style.display = 'none';
var hoaDon = getEle('hoaDon');
var thanhTien = getEle('thanhTien');
var idhoVaTen = getEle('idhoVaTen');
var soKwTieuThu = getEle('soKwTieuThu');
var thanhToan = getEle('thanhToan');
// Tính tiền điện
getEle('btntongTien').onclick = function(){
    var hoVaTen = getEle('hoVaTen').value;
    var soKw = getEle('soKw').value;
    // var tongThanhTien = 0;
    if(soKw == '' || hoVaTen == ''){
        alert('Vui lòng điền đầy đủ thông tin')
        return false;
    }else{
        var tongThanhTien = tinhTongTienDien(soKw);
        divThanhTien.style.display = 'block';
        thanhTien.innerHTML = ('Tổng thành tiền là: ' + tongThanhTien.toLocaleString() + ' đồng ');
        return true;
    }
}
// In hóa đơn
getEle('btnhoaDon').onclick = function(){
    var hoVaTen = getEle('hoVaTen').value;
    var soKw = getEle('soKw').value;
    // var tongThanhTien = 0;
    if(soKw == '' || hoVaTen == ''){
        alert('Vui lòng điền đầy đủ thông tin')
        return false;
    }else{
        var tongThanhTien = tinhTongTienDien(soKw);
        divhoaDon.style.display = 'block';
        idhoVaTen.innerHTML = 'Họ và tên là: ' + hoVaTen;
        soKwTieuThu.innerHTML = 'Số Kw đã tiêu thụ là: ' + soKw + ' Kw ';
        thanhToan.innerHTML = 'Tổng tiền phải thanh toán là: ' + tongThanhTien.toLocaleString() + ' đồng ';
        return true;
    }
}