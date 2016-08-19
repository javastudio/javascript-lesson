var Alert = document.getElementById("Alert");
var selected = document.querySelectorAll("input");
var ongkir = document.getElementById("ongkir");
var destOptions = document.getElementById("destinations");
var tujuan = document.getElementById("tujuan");


var Ongkir = {
    text: ongkir.innerHTML = "Pilih Jasa Pengiriman",
    value: null
};


var Tujuan = {
    text: tujuan.innerHTML = "Pilih Tujuan",
    value: null
};


destOptions.onclick = function () {
    var opt = this.options;
    var index = this.selectedIndex;

    Tujuan.text = tujuan.innerHTML = opt[index].text;
    Tujuan.value = opt[index].value;
};


selected.forEach(function(attrs, index) {
    selected[index].onclick = function() {
        showAlert(false);

        if ( ! Tujuan.value) return showAlert(true);

        Ongkir.text = ongkir.innerHTML = "Rp " + attrs.value + ",-";
    }
});


function showAlert(bool) {
    Alert.className = bool ? "show" : "hide";
}