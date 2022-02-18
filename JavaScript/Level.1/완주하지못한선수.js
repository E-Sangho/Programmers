function solution(participant, completion) {
    var answer = "";
    let map = new Map();

    participant.map((people) => {
        if (map.has(people)) {
            map.set(people, map.get(people) + 1);
        } else {
            map.set(people, 1);
        }
    });

    completion.map((people) => {
        if (map.get(people)) {
            map.set(people, map.get(people) - 1);
        }
    });
    for (let [key, value] of map) {
        if (value) {
            answer += key;
        }
    }

    return answer;
}
