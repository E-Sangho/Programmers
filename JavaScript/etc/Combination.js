function Combination(arr) {
    let n = arr.length;
    let chosen = [];
    let answer = [];
    function CUtil(r, depth) {
        if (chosen.length === r) {
            answer.push(chosen.slice());
            return;
        }
        if (depth === n) return;
        chosen.push(arr[depth]);
        CUtil(r, depth + 1);
        chosen.pop();
        CUtil(r, depth + 1);
    }
    for (let r = 0; r <= n; ++r) {
        CUtil(r, 0);
    }
    return answer;
}

let arr = [1, 2, 3];
console.log(Combination(arr));
