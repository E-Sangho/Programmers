function solution(genres, plays) {
    const len = genres.length;
    let playedNum = new Map();
    let list = new Map();
    for (let i = 0; i < len; ++i) {
        playedNum.has(genres[i])
            ? playedNum.set(genres[i], playedNum.get(genres[i]) + plays[i])
            : playedNum.set(genres[i], plays[i]);
        list.has(genres[i])
            ? list.set(genres[i], [...list.get(genres[i]), [plays[i], i]])
            : list.set(genres[i], [[plays[i], i]]);
    }
    let map2Array = Array.from(playedNum);
    map2Array.sort((a, b) => {
        return b[1] - a[1];
    });
    for (let [key, value] of list) {
        value.sort((a, b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            return b[0] - a[0];
        });
    }
    let answer = [];
    for (let key of map2Array) {
        if (list.get(key[0]).length === 1) {
            answer.push(list.get(key[0])[0][1]);
        } else {
            answer.push(list.get(key[0])[0][1]);
            answer.push(list.get(key[0])[1][1]);
        }
    }

    return answer;
}
