function countCalculator(){
    var beratBadan = document.getElementById('weight-input').value;
    var tinggiBadan = document.getElementById('height-input').value*0.01;
    var result = document.getElementById('result');
    var result0 = document.getElementById('result0');
    var hResult = document.getElementById('h-result');
    var keterangan = document.getElementById('keterangan');
    var hasilBmi = document.getElementById('hasil-bmi');

    document.getElementById('main-result').removeAttribute('hidden');

    var hasil = (beratBadan/(Math.pow(tinggiBadan,2))).toFixed(1);

    if (hasil < 18.5) {
        hResult.innerHTML= "Hasil"
        result.innerHTML= "Berat Badan Kurang" 
        result0.innerHTML= hasil
        keterangan.innerHTML= "Anda kekurangan berat badan. Perhatikan asupan gizi Anda. Bila perlu, periksakan pada ahlinya. Semangat!"
        hasilBmi.innerHTML = "Download Hasil BMI"
    } else if (hasil >= 18.5 && hasil <= 24.9) {
        hResult.innerHTML= "Hasil"
        result.innerHTML= "Normal"
        result0.innerHTML= hasil
        keterangan.innerHTML= "Anda memiliki berat badan ideal. Itu bagus, pertahankan!"
        hasilBmi.innerHTML = "Download Hasil BMI"
    } else if (hasil >= 25.0 && hasil <=29.9) {
        hResult.innerHTML= "Hasil"
        result.innerHTML= "Berat Badan Lebih"
        result0.innerHTML= hasil
        keterangan.innerHTML= "Anda kelebihan berat badan. Segera perhatikan asupan makanan Anda dan rajinlah olahraga."
        hasilBmi.innerHTML = "Download Hasil BMI"
    } else if (hasil >= 30.0) {
        hResult.innerHTML= "Hasil"
        result.innerHTML= "Obesitas"
        result0.innerHTML= hasil
        keterangan.innerHTML= "Anda mengalami obesitas. Ini tidak baik, segera diskusikan dengan pakar profesional rencana diet Anda. Semangat!"
        hasilBmi.innerHTML = "Download Hasil BMI"
    } else {
        hResult.innerHTML= ""
        result0.innerHTML= ""
        result.innerHTML= ""
        hasilBmi.innerHTML = ""
    }
}

function clearInput(){
    document.getElementById('birth-input').value = '';
    document.getElementById('weight-input').value = '';
    document.getElementById('height-input').value = '';

    var clearButton = document.getElementsByName("input-gender");
    for(var i=0;i<clearButton.length;i++)
    clearButton[i].checked = false;
}



