function solution(n, lost, reserve) {
    let answer = 0;
    let student = Array.from({ length: n + 1 }, () => 1);

    lost.forEach((e) => {
        --student[e];
    });
    reserve.forEach((e) => {
        ++student[e];
    });
    for (let i = 1; i <= n; ++i) {
        if (student[i] === 0) {
            if (i > 1 && student[i - 1] > 1) {
                --student[i - 1];
                ++student[i];
            } else if (i < n && student[i + 1] > 1) {
                --student[i + 1];
                ++student[i];
            }
        }
        if (student[i] > 0) {
            ++answer;
        }
    }
    return answer;
}
