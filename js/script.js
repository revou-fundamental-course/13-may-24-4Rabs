// Ini JS

function hitungLuas(){
    var alas = parseInt(document.getElementById('inputAlas').value);
    var tinggi = parseInt(document.getElementById('inputTinggi').value);
    var luas = 0.5 * alas * tinggi;
    
    labelalas = document.getElementById('jsalas');
    labeltinggi = document.getElementById('jstinggi');
    labeltotal = document.getElementById('jstotal');

    labelalas.innerHTML = alas;
    labeltinggi.innerHTML = tinggi;
    labeltotal.innerHTML = luas;
}

function resetLuas() {
    document.getElementById('inputAlas').value = '';
    document.getElementById('inputTinggi').value = '';

    labelAlas = document.getElementById('jsalas');
    labelTinggi = document.getElementById('jstinggi');
    labeltotal = document.getElementById('jstotal');

    labelAlas.innerHTML = '';
    labelTinggi.innerHTML = '';
    labeltotal.innerHTML = '';
}

function hitungKeliling(){
    var X = parseInt(document.getElementById('inputX').value);
    var Y = parseInt(document.getElementById('inputY').value);
    var Z = parseInt(document.getElementById('inputZ').value);
    var keliling = X + Y + Z;

    labelX = document.getElementById('jsX');
    labelY = document.getElementById('jsY');
    labelZ = document.getElementById('jsZ');
    labelhasil = document.getElementById('jshasil');

    labelX.innerHTML = X;
    labelY.innerHTML = Y;
    labelZ.innerHTML = Z;
    labelhasil.innerHTML = keliling;
}

function resetKeliling() {
    document.getElementById('inputX').value = '';
    document.getElementById('inputY').value = '';
    document.getElementById('inputZ').value = '';
    
    
    labelX = document.getElementById('jsX');
    labelY = document.getElementById('jsY');
    labelZ = document.getElementById('jsZ');
    labelhasil = document.getElementById('jshasil');

    labelX.innerHTML = '';
    labelY.innerHTML = '';
    labelZ.innerHTML = '';
    labelhasil.innerHTML = '';

}