let singlevendor = null;

$().ready(() => {
    console.log("IN jQuery");

    vendorDetail(3)
    .done((vendor) => {
        singleVendor = vendor;
        display(singleVendor);
    })
    
    $("#change").click(() => {
        console.log("Click!");
        let vendor ={
            id: $("#pid").val(),
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
    
        vendorChange(vendor)
            .done((res) => {
                console.log("Change successful: ", res);
            })
            .fail((err) => {
                console.error("Change failed: ", err);
            })
    })

});    



const display = (vendor) => {
    $("#pid").val(vendor.id);
    $("#pcode").val(vendor.code);
    $("#pname").val(vendor.name);
    $("#paddress").val(vendor.address);
    $("#pcity").val(vendor.city);
    $("#pstate").val(vendor.state);
    $("#pzip").val(vendor.zip);
    $("#pphoneNumber").val(vendor.phoneNumber);
    $("#pemail").val(vendor.email);
}