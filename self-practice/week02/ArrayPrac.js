// Challenge 1 : PageError
function calculateTotalPages(items, itemsPerPage) {
    if (itemsPerPage <= 0 || items <= 0) {
        throw new Error("Items per page must be greather than zero");
    }
    return Math.ceil(items/itemsPerPage);
}

console.log(calculateTotalPages(25,5));

