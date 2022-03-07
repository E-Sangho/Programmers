function solution(brown, yellow) {
    var answer = [];
    let total = brown + yellow;
    let sqrt = Math.floor(Math.sqrt(total));
    for (let column = 3; column <= sqrt; ++column) {
        if (total % column === 0) {
            let row = total / column;
            if ((row - 2) * (column - 2) === yellow) {
                answer = [row, column];
                break;
            }
        }
    }
    return answer;
}
