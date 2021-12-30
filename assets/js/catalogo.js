document.getElementById("BtnNuez").onclick = function () {
    document.getElementById("Nuez").style.display = "block"
    document.getElementById("Alimento").style.display = "none";
    document.getElementById("Maquiladora").style.display = "none";
    document.getElementById("Mineria").style.display = "none";
}
document.getElementById("BtnAlimento").onclick = function () {
    document.getElementById("Nuez").style.display = "none"
    document.getElementById("Alimento").style.display = "block";
    document.getElementById("Maquiladora").style.display = "none";
    document.getElementById("Mineria").style.display = "none";
}
document.getElementById("BtnMaquila").onclick = function () {
    document.getElementById("Nuez").style.display = "none"
    document.getElementById("Alimento").style.display = "none";
    document.getElementById("Maquiladora").style.display = "block";
    document.getElementById("Mineria").style.display = "none";
}
document.getElementById("BtnMineria").onclick = function () {
    document.getElementById("Nuez").style.display = "none"
    document.getElementById("Alimento").style.display = "none";
    document.getElementById("Maquiladora").style.display = "none";
    document.getElementById("Mineria").style.display = "block";
}