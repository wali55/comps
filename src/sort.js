const data = ['t', 'A', 'B', 'b', 'a'];

data.sort((a, b) => {
    return a.localeCompare(b);
});