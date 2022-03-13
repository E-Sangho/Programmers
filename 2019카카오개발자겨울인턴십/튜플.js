function solution(s) {
    var answer = [];
    JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
        .sort((x, y) => x.length - y.length)
        .forEach((arr) => {
            for (let i = 0; i < arr.length; ++i) {
                if (!answer.includes(arr[i])) {
                    answer.push(arr[i]);
                }
            }
        });
    return answer;
}
