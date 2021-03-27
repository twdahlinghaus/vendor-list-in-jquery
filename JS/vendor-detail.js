let singlevendor = null;

$().ready(() => {

    vendorDetail(3)
        .done((vendor) => {
            singlevendor = vendor;
            display(singlevendor);
        })
        .fail((err) => {
            alert("Vendor not found!");
        });

});

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

};