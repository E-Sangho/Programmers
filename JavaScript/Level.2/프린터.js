function solution(priorities, location) {
    var answer = 0;
    while (true) {
        let priority = priorities[0];
        let flag = true;
        for (let i = 0; i < priorities.length; ++i) {
            if (priorities[i] > priority) {
                priorities.push(priority);
                priorities.shift();
                if (location === 0) {
                    location = priorities.length;
                }
                --location;
                flag = false;
                break;
            }
        }
        if (flag) {
            ++answer;
            if (location == 0) break;
            priorities.shift();
            --location;
        }
    }
    return answer;
}
