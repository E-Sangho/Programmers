function Permutation(arr) {
    let n = arr.length;
    let answer = [];
    let visited = Array.from({ length: n });
    let chosen = [];
    function PUtil(depth, r) {
        if (depth === r) {
            answer.push(chosen.slice());
            return;
        }
        for (let i = 0; i < n; ++i) {
            if (!visited[i]) {
                visited[i] = true;
                chosen[depth] = arr[i];
                PUtil(depth + 1, r);
                visited[i] = false;
            }
        }
    }
    for (let r = 0; r <= n; ++r) {
        PUtil(0, r);
    }
    return answer;
}

let arr = [1, 2, 3, 4];
console.log(Permutation(arr));
