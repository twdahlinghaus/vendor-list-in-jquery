// const url = "http://localhost:8080/api/vendors/"

const newvendor = {
    id: 0, 
    username: "vendor1", 
    code: "abcXYZ", 
    name: "Jon", 
    address: "123 Name Street",
    city:"Dayton",
    state: "OH",
    zip: 45424,
    phoneNumber: "555-555-5555",
    email: "Jon@email.com"
}

let allvendors =[];

$().ready(() => {

    vendorList()
        .done((vendors) => {
            console.log("Vendors:", vendors)
            display(vendors);
        })
        .fail()
})

    // $.ajax({
    //     method: "POST",
    //     url: url,
    //     data: JSON.stringify(newvendor),
    //     contentType: 'application/json'        
    // })
    //     .done((res) => {
    //         console.log(res);
    //     })
    //     .fail((err) => {
    //         console.error(err);
    //     })

    

    // $.getJSON(url)
    //     .done((vendors) => {
    //         console.log(vendors);
    //     })
    //     .fail((err) => {
    //         console.error(err);
    //     })


const display = (vendors) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let vendor of vendors) {
        let tr =$("<tr></tr>");
        tr.append( $(`<td>${vendor.id}</td>`));
        tr.append( $(`<td>${vendor.code}</td>`));
        tr.append( $(`<td>${vendor.name}</td>`));
        let tdAdd = $(`<td></td>`);
        let toAdd = $(`<td>${vendor.address}, ${vendor.city}, ${vendor.state}, ${vendor.zip}, ${vendor.phoneNumber}, ${vendor.email}</td>`);
        tr.append(tdAdd);
        tbody.append(tr);
    }
}