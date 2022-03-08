function solution(people, limit) {
    people.sort((a, b) => {
        return a - b;
    });
    let answer = 0;
    let lt = 0,
        rt = people.length - 1;
    while (lt <= rt) {
        if (lt === rt) {
            ++answer;
            break;
        }
        if (people[lt] + people[rt] <= limit) {
            ++lt;
            --rt;
            ++answer;
        } else {
            --rt;
            ++answer;
        }
    }
    return answer;
}
