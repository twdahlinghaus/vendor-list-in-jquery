let singlevendor = null;

$().ready(() => {
    console.log("IN jQuery");
   
$("#create").click(() => {
    console.log("Click!");
    let vendor ={
        id: 0,
        code: $("#pcode").val(),
        name: $("#pname").val(),
        address: $("#paddress").val(),
        city: $("#pcity").val(),
        state: $("#pstate").val(),
        zip: $("#pzip").val(),
        phoneNumber: $("#pphoneNumber").val(),
        email: $("#pemail").val()

    }
    console.log(vendor);

    vendorCreate(vendor)
        .done((res) => {
            console.log("Create successful: ", res);
        })
        .fail((err) => {
            console.error("Create failed: ", err);
        })
})


const display = (vendor) => {
    $("#pid").text(vendor.id);
    $("#pcode").text(vendor.code);
    $("#pname").text(vendor.name);
    $("#paddress").text(vendor.address);
    $("#pcity").text(vendor.city);
    $("#pstate").text(vendor.state);
    $("#pzip").text(vendor.zip);
    $("#pphoneNumber").text(vendor.phoneNumber ?? "NA");
    $("#pemail").text(vendor.email ?? "NA");
}
})