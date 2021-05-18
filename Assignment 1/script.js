var weight, height, BMI;


function BMICalculate() {
weight = document.getElementById("weight").value;
height = document.getElementById("height").value;
BMI = ( weight / (height*height) );

if(BMI < 18.5){
        alert('"Gầy" và nguy cơ phát triển bệnh"THẤP"');
    } else if((BMI > 18.5) && (BMI < 24.9)){
        alert('"Bình thường" và nguy cơ phát triển bệnh "TRUNG BÌNH"');
    } else if((BMI > 25.0) && (BMI < 29.9)){
        alert('"Hơi béo" và nguy cơ phát triển bệnh "CAO"');
    } else if((BMI > 30.0) && (BMI < 34.9)){
        alert('"Béo phì cấp độ 1" và nguy cơ phát triển bệnh "CAO"');    
    } else if((BMI > 35.0) && (BMI < 39.9)){
        alert('"Béo phì cấp độ 2" và nguy cơ phát triển bệnh "RẤT CAO"');    
    } else {
        alert('"Béo phì cấp độ 3" và nguy cơ phát triển bệnh "NGUY HIỂM"');       
    }
}


