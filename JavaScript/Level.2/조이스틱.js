function solution(name) {
    var answer = 0;
    let n = name.length;
    let diffIndex = [];
    for (let i = 0; i < n; ++i) {
        if (name[i] !== "A") {
            diffIndex.push(i);
            answer += Math.min(
                name[i].charCodeAt() - 65,
                90 - name[i].charCodeAt() + 1
            );
        }
    }
    let diffLen = diffIndex.length;
    let minLen = 30;
    let visited = Array.from({ length: diffLen });
    function DFS(index, depth, len) {
        if (depth === diffLen) {
            if (len < minLen) {
                minLen = len;
            }
            return;
        }
        for (let i = 0; i < diffLen; ++i) {
            if (!visited[i]) {
                visited[i] = 1;
                let minValue = Math.min(
                    Math.abs(index - diffIndex[i]),
                    n - Math.abs(index - diffIndex[i])
                );
                DFS(diffIndex[i], depth + 1, len + minValue);
                visited[i] = 0;
            }
        }
    }
    DFS(0, 0, 0);
    answer += minLen;
    return answer;
}
