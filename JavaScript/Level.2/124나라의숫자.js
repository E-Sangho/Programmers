function solution(n) {
    var answer = "";
    let list = [1, 2, 4];
    while (n > 0) {
        --n;
        answer = list[n % 3] + answer;
        n = Math.floor(n / 3);
    }
    return answer;
}
