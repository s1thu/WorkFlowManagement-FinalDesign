// Counter date button

let count = 0;
document.getElementById("counting").innerText = count;

//creation of increment function
function increment() {
    count = count + 1;
    document.getElementById("counting").innerText = count;
    $(".add-date").append(
        '<div class="input-group">' +
        '<input type="text" class="form-control popover-date datepicker datepicker-autoclose date' + count + '" id="datepicker-autoclose "' +
        ' placeholder="mm/dd/yyyy"> <span  style="margin-right:82px;margin-top:5px;" class=" input-group-append date' + count + '"><span class="input-group-text" ><i class="mdi mdi-calendar-check"></i></span></span>' +
        '</div>'
    );
}
//creation of decrement function
function decrement() {
    if (document.getElementById("counting").innerText != 0) {
        $('.date' + document.getElementById("counting").innerText).remove();
        count = count - 1;
    }
    document.getElementById("counting").innerText = count;


}
// Prevention to click minus when negative
if (document.getElementById("counting").innerText == 0) {
    decrement().preventDefault();
}
//PM OTform drop down