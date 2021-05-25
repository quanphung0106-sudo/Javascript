var soTienVay, thoiGianVay, laiSuat, ngayGiaiNgan, soGocConLai, gocPhaiTra, laiPhaiTra, soTienPhaiTraHangThang;

function Calculate(){
    soTienVay = document.getElementById("soTienVay").value;
    thoiGianVay = document.getElementById("thoiGianVay").value;
    laiSuat = document.getElementById("laiSuat").value;
    ngayGiaiNgan = new Date(document.getElementById("ngayGiaiNgan").value);

 // set biến datetimes đê giá trị được tính trả vào box của datetimes
 //datetimes = document.getElementById("datetimes").innerHTML = ngayGiaiNgan.toLocaleDateString()
  
    soGocConLai = soTienVay;

   //In ra màn hình  ngày tháng vay và số tiền vay
   console.log(ngayGiaiNgan.toLocaleDateString() + " Số tiền vay: " + soTienVay)

   //In ra màn hình số tiền phải trả trong 12 tháng
   for(var i = 0; i < thoiGianVay; i++){
         ngayGiaiNgan.setMonth(ngayGiaiNgan.getMonth() + 1) 

         gocPhaiTra = Math.round(soTienVay / thoiGianVay)
         laiPhaiTra = Math.round(soGocConLai * laiSuat / 12/ 100)
         soGocConLai = Math.round(soGocConLai  - gocPhaiTra) 
         soTienPhaiTraHangThang = laiPhaiTra + gocPhaiTra
              
       console.log(ngayGiaiNgan.toLocaleDateString() + " Số gốc còn lại là: " + soGocConLai + " " + "Số gốc phải trả là: " + gocPhaiTra + " " + "Tiền lãi phải trả hàng tháng là : " + laiPhaiTra + " " + "Số tiền phải trả trong tháng nay là: " + soTienPhaiTraHangThang)

       
    }
}

