// You should implement your task here.

module.exports = function towelSort(matrix) {
    let answer = [];

    if (Boolean(!matrix) || matrix.length < 1) {
        return answer;
    }

    let arr = matrix.map((item, i) => {
        if (i % 2 === 0) {
            return item;
        } else {
            return item.reverse();
        }
    });

    let str = arr.toString();
    answer = str.split(',').map(item => +item);

    return answer;
};    
