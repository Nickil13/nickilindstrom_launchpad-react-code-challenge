export const sortAlphabetically = (list) => {
    list.sort(function (a, b) {
        return a.name > b.name ? 1 : a.name === b.name ? 0 : -1;
    });
    return list;
};
