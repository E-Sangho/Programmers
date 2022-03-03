function solution(answers) {
    var answer = [];
    let gum1 = 0,
        gum2 = 0,
        gum3 = 0;
    let n = answers.length;
    let oneWay = [1, 2, 3, 4, 5],
        twoWay = [2, 1, 2, 3, 2, 4, 2, 5],
        threeWay = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    for (let i = 0; i < n; ++i) {
        if (oneWay[i % 5] === answers[i]) ++gum1;
        if (twoWay[i % 8] === answers[i]) ++gum2;
        if (threeWay[i % 10] === answers[i]) ++gum3;
    }
    console.log(gum1, gum2, gum3);
    let max = Math.max(gum1, gum2, gum3);
    if (max === gum1) answer.push(1);
    if (max === gum2) answer.push(2);
    if (max === gum3) answer.push(3);
    return answer;
}
