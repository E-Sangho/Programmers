let parents;

function find(v) {
    if (parents[v] === v) {
        return v;
    }
    return find(parents[v]);
}

function union(x, y) {
    let p_x = find(x),
        p_y = find(y);
    if (p_x < p_y) {
        parents[p_y] = p_x;
    } else {
        parents[p_x] = p_y;
    }
}

function solution(n, costs) {
    let answer = 0;
    parents = Array.from({ length: n });
    for (let i = 0; i < n; ++i) {
        parents[i] = i;
    }
    costs.sort((a, b) => {
        return a[2] - b[2];
    });
    for (let [x, y, weight] of costs) {
        console.log("x and y is", x, y);
        if (find(x) !== find(y)) {
            union(x, y);
            answer += weight;
            console.log("Union", find(x), find(y), answer);
        }
    }
    return answer;
}
