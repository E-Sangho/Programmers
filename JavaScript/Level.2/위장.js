function solution(clothes) {
    var answer = 1;
    let map = new Map();
    for (let clothe of clothes) {
        if (map.has(clothe[1])) {
            map.set(clothe[1], map.get(clothe[1]) + 1);
        } else {
            map.set(clothe[1], 1);
        }
    }
    for (let [key, value] of map) {
        answer *= value + 1;
    }
    answer -= 1;
    return answer;
}
