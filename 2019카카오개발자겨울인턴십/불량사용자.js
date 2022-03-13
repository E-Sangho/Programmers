function isEqual(set1, set2) {
    if (set1.length !== set2.length) return false;
    for (let a of set1) {
        if (!set2.has(a)) {
            return false;
        }
    }
    return true;
}

function solution(user_id, banned_id) {
    let answer = [];
    let n = banned_id.length;
    let path = Array.from({ length: n });
    let marked = Array.from({ length: user_id.length });
    let regexp = banned_id
        .map((e) => e.replace(/\*/g, "[a-z0-9]"))
        .map((e) => new RegExp(e));
    function DFS(depth) {
        if (depth === n) {
            let flag = true;
            for (let i = 0; i < regexp.length; ++i) {
                let exec = regexp[i].exec(path[i]);
                if (exec === null || exec[0] !== path[i]) {
                    flag = false;
                }
            }
            if (flag) {
                let temp = new Set(path);
                let flag2 = true;
                for (let ele of answer) {
                    if (isEqual(ele, temp)) {
                        flag2 = false;
                    }
                }
                if (flag2) {
                    answer.push(temp);
                }
            }
            return;
        }
        for (let i = 0; i < user_id.length; ++i) {
            if (!marked[i]) {
                marked[i] = 1;
                path[depth] = user_id[i];
                DFS(depth + 1);
                marked[i] = 0;
            }
        }
    }
    DFS(0);
    return answer.length;
}
