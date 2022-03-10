function solution(routes) {
    let answer = 0;
    routes.sort((a, b) => {
        return a[1] - b[1];
    });
    let camTime = -30001;
    routes.forEach((route) => {
        if (camTime < route[0]) {
            camTime = route[1];
            ++answer;
        }
    });
    return answer;
}
