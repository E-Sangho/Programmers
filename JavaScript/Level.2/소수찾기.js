function isPrime(p) {
    if (p < 2) return false;
    let sqrt = Math.floor(Math.sqrt(p));
    for (let i = 2; i <= sqrt; ++i) {
        if (p % i === 0) {
            return false;
        }
    }
    return true;
}

function Permutation(numbers) {
    let n = numbers.length;
    let visited = Array.from({ length: n });
    let choose = "";
    let answer = [];
    function PermutationUtil(depth, r) {
        if (depth === r) {
            let num = Number(choose);
            if (!answer.includes(num)) {
                answer.push(num);
            }
            return;
        }
        for (let i = 0; i < n; ++i) {
            if (!visited[i]) {
                visited[i] = 1;
                choose += String(numbers[i]);
                PermutationUtil(depth + 1, r);
                visited[i] = 0;
                choose = choose.substr(0, choose.length - 1);
            }
        }
    }
    for (let r = 0; r <= n; ++r) {
        PermutationUtil(0, r);
    }
    return answer;
}

function solution(numbers) {
    let answer = 0;
    let P = Permutation(numbers);
    for (let p of P) {
        if (isPrime(p)) {
            ++answer;
        }
    }
    return answer;
}
