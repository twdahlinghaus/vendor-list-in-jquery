let singlevendor = null;

$().ready(() => {

    vendorDelete(6)
        .done((vendor) => {
            singlevendor = vendor;
        })
        
        $("#delete").click(() => {
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
            
            vendorDelete(vendor)
            .done((res) => {
                console.log("Delete successful: ", res);
            })
            .fail((err) => {
                console.error("Delete failed: ", err);
            })
        })

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