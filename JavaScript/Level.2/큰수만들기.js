function solution(number, k) {
    let arr = [];
    let n = number.length;
    for (let i = 0; i < n; ++i) {
        while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
            arr.pop();
            --k;
        }
        arr.push(number[i]);
    }
    while (k > 0) {
        arr.pop();
        --k;
    }
    let answer = arr.join("");
    return answer;
}
