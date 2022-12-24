function thuchien() {
    var chuoi = document.getElementById("chuoi").value;
    if (chuoi == "") {
        alert("hãy nhập nội dung vào chuỗi.");
        document.getElementById("chuoi").focus();
    }
    var array = chuoi.split(",");
    var select = document.getElementById("danhsach");
    var length = select.options.length;
    for (i = 0; i < length; i++) {
        select.remove(select.options[0]);
    }
    array.forEach(function (op) {
        op = op.trim();``
        if (op != "") {
            var option = document.createElement("option");
            option.text = op;
            select.add(option);
        }
    }, this);
}
function change() {
    var selectBox = document.getElementById("danhsach");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    alert("Bạn đã chọn mục: " + selectedValue);
}
function huy() {
    document.getElementById("chuoi").value = "";
}

// function trimSpace(str) {
//     return str.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ");
// }