// Thêm số vào mảng
var _arrNumber = [];
addNumber.onclick = function () {
    var inNumber = Number(document.querySelector('#inNumber').value);
    if (!Number.isInteger(inNumber)) {
        alert('Hãy nhập 1 số nguyên');
    } else {
        _arrNumber.push(inNumber);
        document.querySelector('#inNumber').value = '';
    }
    document.querySelector('#result0').innerHTML = '[ ' + _arrNumber + ' ]';
}

// bài 1: tính tổng số dương
total.onclick = function () {
    var posTotal = 0;
    for (var i = 0; i < _arrNumber.length; i++) {
        if (_arrNumber[i] >= 0) {
            posTotal += _arrNumber[i];
        }
    }
    document.querySelector('#result1').innerHTML = 'Tổng số dương: ' + posTotal;
    
}

// bài 2: đếm số dương
count.onclick = function () {
    var amount = 0;
    for (var i = 0; i < _arrNumber.length; i++) {
        if (_arrNumber[i] >= 0) {
            amount += 1;
        }
    }
    document.querySelector('#result2').innerHTML = 'Số dương: ' + amount;
}

// bài 3: tìm số nhỏ nhất trong mảng
search.onclick = function () {
    var smallest = 0;
    for (var i = 1; i < _arrNumber.length; i++) {
        if (_arrNumber[smallest] > _arrNumber[i]) {
            smallest = i;
        }
    }
    document.querySelector('#result3').innerHTML = 'Số nhỏ nhất: ' + _arrNumber[smallest];
}

// bài 4: tìm số dương nhỏ nhất trong mảng
searchSoDuong.onclick = function () {
    var smallPosNum = 0;
    var arrPosNum = [];
    for (var i = 0; i < _arrNumber.length; i++) {
        if (_arrNumber[i] >= 0) {
            arrPosNum.push(_arrNumber[i]);
        }
    }

    if (arrPosNum.length != 0) {
        for (var i = 1; i < arrPosNum.length; i++) {
            if (arrPosNum[smallPosNum] > arrPosNum[i]) {
                smallPosNum = i;
            }
        }
        document.querySelector('#result4').innerHTML = 'Số dương nhỏ nhất: ' + arrPosNum[smallPosNum];
    } else {
        document.querySelector('#result4').innerHTML = 'Không có số dương.';
    }
}

// bài 5: tìm số chẵn cuối cùng trong mảng
evenNumber.onclick = function () {
    var arrEvenNum = [];
    for (var i = 0; i < _arrNumber.length; i++) {
        if (_arrNumber[i] % 2 == 0) {
            arrEvenNum.push(_arrNumber[i]);
            document.querySelector('#result5').innerHTML = 'Số chẵn cuối:' + _arrNumber[i];
        }
    }
    if (arrEvenNum.length == 0) {
        document.querySelector('#result5').innerHTML = 'Không có số chẵn.';
    }
}

// bài 6: đổi chỗ 2 giá trị trong mảng
btnChangeLocal.onclick = function () {
    var loca1 = Number(document.querySelector('#loca1').value);
    var loca2 = Number(document.querySelector('#loca2').value);
    var inHtml = '';
    if (loca1 <= _arrNumber.length && loca2 <= _arrNumber.length) {
        var change = _arrNumber[loca1];
        _arrNumber[loca1] = _arrNumber[loca2];
        _arrNumber[loca2] = change;
        inHtml = _arrNumber
    } else {
        inHtml = 'Nhập đúng vị trí trong mảng';
    }
    document.querySelector('#result6').innerHTML = 'Mảng sau khi đổi: ' + inHtml;
}

// bài 7: sắp xếp mảng theo giá trị tăng dần
btnArrange.onclick = function () {
    // for (var i = 0; i < arrNumber.length - 1; i++) {
    //     for (var j = i+1; j < arrNumber.length; j++) {
    //         if (arrNumber[j] < arrNumber[i]) {
    //             var mediate = arrNumber[i];
    //             arrNumber[i] = arrNumber[j];
    //             arrNumber[j] = mediate;
    //         }
    //     }
    // }
    for (var i = 0; i < _arrNumber.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < _arrNumber.length; j++) {
            if (_arrNumber[min] > _arrNumber[j]) {
                min = j;
            }
        }
        if (_arrNumber[min] < _arrNumber[i]) {
            var mediate = _arrNumber[i];
            _arrNumber[i] = _arrNumber[min];
            _arrNumber[min] = mediate;
        }
    }
    document.querySelector('#result7').innerHTML ='Mảng sau khi sắp xếp: ' + _arrNumber;
}

// bài 8: tìm số nguyên tố đầu tiên trong mảng
btnFindPrimeNum.onclick = function () {
    for (var i = 0; i < _arrNumber.length; i++) {
        var provis = primeNum(i);
        var html = '';
        if (provis == 0) {
            html = 'Số nguyên tố đầu tiên: ' + _arrNumber[i];
            break;
        } else {
            html = 'Mảng không có số nguyên tố.';
        }
    }
    document.querySelector('#result8').innerHTML = html;
}

function primeNum (index) {
    var count = 0;
    for (var i = 2; i < _arrNumber[index]; i++) {
        if (_arrNumber[index] % i == 0) {
            count = 1;
            break;
        }
    }
    return count;
}

// bài 9: nhập 1 mảng số thực, tìm có bao nhiêu số nguyên
var _arrRealNumber = [];
document.querySelector('#inRealNum').setAttribute("type", "number");
addRealNumber.onclick = function () {
    var inRealNum = Number(document.querySelector('#inRealNum').value);
    _arrRealNumber.push(inRealNum);
    document.querySelector('#rNumber').innerHTML = '[ ' + _arrRealNumber + ' ]';
       
}

btnCountRealNumber.onclick = function () {
    var count = 0;
    for (var i = 0; i < _arrRealNumber.length; i++) {       
        if (Number.isInteger(_arrRealNumber[i])) {
            count++;
        }
    }
    document.querySelector('#result9').innerHTML = 'Số nguyên: ' + count;
}

// bài 10: so sánh số lượng số dương và số âm
btnConfront.onclick = function () {
    var posNum = 0;
    var negaNum = 0;
    var html = '';
    for (var i = 0; i < _arrNumber.length; i++) {
        if (_arrNumber[i] >= 0) {
            posNum++;
        } else {
            negaNum++;
        }
    }
    if (posNum == negaNum) {
        html = 'dương = âm';
    } 
    if (posNum < negaNum) {
        html = 'dương < âm';
    } 
    if (posNum > negaNum) {
        html = 'dương > âm';
    }
    document.querySelector('#result10').innerHTML = html;

} 

