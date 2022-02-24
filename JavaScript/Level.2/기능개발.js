function solution(progresses, speeds) {
    var answer = [];
    let queue = progresses.map((progress) => 100 - progress);
    let index = 0;
    while (index < queue.length) {
        let finishedWork = 0;
        let day = Math.ceil(queue[index] / speeds[index]);
        while (
            index < queue.length &&
            Math.ceil(queue[index] / speeds[index]) <= day
        ) {
            ++finishedWork;
            ++index;
        }
        answer.push(finishedWork);
    }
    return answer;
}
