function timSoNguyenDuongNN(event){
    event.preventDefault();
    var n = 0;
    var tong = 0;
    var resultSoNguyenDuongNN = "";
    while(n < 10000){
        n++;
        tong += n;
        if(tong > 10000){
            resultSoNguyenDuongNN += "Số nguyên nhỏ nhất là: " + n;
            break;
        }        
    }
    document.getElementById("resultSoNguyenDuongNN").innerHTML = resultSoNguyenDuongNN;
}

function tinhTongXN(event){
    event.preventDefault();
    var x = parseInt(document.getElementById("txtNumberX").value);
    var n = parseInt(document.getElementById("txtNumberN").value);
    var tongXN = 0;
    var resulttinhTongXN = "";
    var i = 1;
    while (i <= n){
        tongXN += Math.pow(x,i);       
        i++;         
    }
    resulttinhTongXN += "Tổng là: " + tongXN;
    document.getElementById("resulttinhTongXN").innerHTML= resulttinhTongXN;
}

function tinhGiaiThuaN(event){
    event.preventDefault();
    var numN = parseInt(document.getElementById("numN").value);
    document.getElementById("resulttinhGiaiThuaN").innerHTML = "Giai thừa của " +  numN + " là " + giaiThua(numN);
}

function giaiThua(n){
    var giai_thua = 1;
    for (var i = 1; i <= n; i++){
        giai_thua *= i;   
    }        
    return giai_thua;
}

function taoDiv(event){
    event.preventDefault();
    var i = 1;
    while(i <= 10){
        if(i % 2 == 0){
            var eleChan = document.createElement("div");
            eleChan.style.height = "50px";
            eleChan.style.background = "red";
            document.getElementById("resulttaoDiv").appendChild(eleChan);
        } else{
            var eleLe = document.createElement("div");
            eleLe.style.height = "50px";
            eleLe.style.background = "blue";
            document.getElementById("resulttaoDiv").appendChild(eleLe);
        }
        i++
    }        
}