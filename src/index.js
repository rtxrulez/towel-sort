// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];

    if (!matrix) return arr;

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            // не четное
            matrix[i].sort(function(a, b) {
                return b - a; // в порядке убывания
            });
        } else {
            matrix[i].sort(function(a, b) {
                return a - b;
            });
        }
        arr = [...arr, ...matrix[i]];
    }

    return arr;
};
