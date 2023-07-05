const data = [
    { name: 'Tomato', cost: 10, weight: 5 },
    { name: 'Carrot', cost: 15, weight: 2 },
    { name: 'Onion', cost: 5, weight: 7 },
];

function getSortValue(vegetable) {
    return vegetable.name;
}

data.sort((a, b) => {
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);

    if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB);
    } else {
        return valueA - valueB;
    }
}); 