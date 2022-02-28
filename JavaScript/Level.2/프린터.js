function solution(priorities, location) {
    var answer = 0;
    while (true) {
        let priority = priorities[0];
        priorities.shift();
        if (priorities.some((e) => e > priority)) {
            priorities.push(priority);
            if (location === 0) location = priorities.length;
        } else {
            ++answer;
            if (location === 0) break;
        }
        --location;
    }
    return answer;
}
