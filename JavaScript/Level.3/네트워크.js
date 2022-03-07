function solution(n, computers) {
    let cnt = 0;
    let visited = Array.from({ length: n }, () => 0);
    function DFSUtil(vertex) {
        for (let i = 0; i < n; ++i) {
            if (computers[vertex][i] === 1 && !visited[i]) {
                visited[i] = 1;
                DFSUtil(i);
            }
        }
    }
    for (let i = 0; i < n; ++i) {
        if (!visited[i]) {
            ++cnt;
            visited[i] = 1;
            DFSUtil(i);
        }
    }
    return cnt;
}
