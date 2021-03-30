const url = "http://localhost:8080/api/vendors/"

const vendorList = () => {
    return $.getJSON(url);
}

const vendorDetail = (id) => {
    return $.getJSON(`${url}${id}`);
}

const vendorCreate = (vendor) => {
    return $.ajax({
        method:"POST",
        url: url,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
}

const vendorChange = (vendor) => {
    return $.ajax({
        method:"PUT",
        url: url,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
}

const vendorRemove = (vendor) => {
        return $.ajax({
        // return $.getJSON(`${url}${id}`);
        method:"DELETE",
        url: url,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
}
