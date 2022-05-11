export const sortAlphabetically = (list) => {
    list.sort(function (a, b) {
        return a.name > b.name ? 1 : a.name === b.name ? 0 : -1;
    });
    return list;
};

export const validateZip = (zipcode) => {
    let allNumbers = /^[0-9]+$/;
    if (zipcode.length !== 5) {
        return false;
    }
    return allNumbers.test(zipcode);
};
