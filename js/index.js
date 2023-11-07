function fitKalkulator(){
    let beratBadan = document.getElementById('weight-input').value;
    let tinggiBadan = document.getElementById('height-input').value*0.01;

    let hasil = beratBadan/(Math.pow(tinggiBadan,2));

    document.write('Hasil:' + (hasil.toFixed(1)))
}

function clearDisplay(){
    document.getElementById('birth-input').value = '';
    document.getElementById('weight-input').value = '';
    document.getElementById('height-input').value = '';

    var clearButton = document.getElementsByName("input-gender");
    for(var i=0;i<clearButton.length;i++)
    clearButton[i].checked = false;
}



