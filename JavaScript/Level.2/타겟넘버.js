function DFS(numbers, target) {
    let cnt = 0;
    let n = numbers.length;
    function DFSUtil(depth, value) {
        if (depth === n) {
            if (value === target) {
                ++cnt;
            }
            return;
        }
        DFSUtil(depth + 1, value + numbers[depth]);
        DFSUtil(depth + 1, value - numbers[depth]);
    }
    DFSUtil(0, 0);
    return cnt;
}

function solution(numbers, target) {
    return DFS(numbers, target);
}
