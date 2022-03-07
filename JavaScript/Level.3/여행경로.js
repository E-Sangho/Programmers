function solution(tickets) {
    tickets.sort(function (a, b) {
        if (a[0] === b[0]) return a[1] < b[1] ? -1 : 1;
        return a[0] < b[0] ? -1 : 1;
    });
    let n = tickets.length;
    let travel_path = "a";
    let visited = Array.from({ length: n });
    function DFS(airport, depth, path) {
        if (depth === n) {
            if (path < travel_path) {
                travel_path = path;
            }
            return;
        }
        for (let i = 0; i < n; ++i) {
            if (airport === tickets[i][0] && !visited[i]) {
                visited[i] = 1;
                DFS(tickets[i][1], depth + 1, path + tickets[i][1]);
                visited[i] = 0;
            }
        }
    }
    DFS("ICN", 0, "ICN");
    let answer = [];
    for (let i = 0; i <= n; ++i) {
        answer.push(travel_path.substring(3 * i, 3 * i + 3));
    }
    return answer;
}
