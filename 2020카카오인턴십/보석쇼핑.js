function solution(gems) {
    let answerList = [];
    let gemSet = new Set(gems);
    let start = 0,
        end = 0;
    let gemSelect = new Set();
    let gemCount = new Map();

    for (let e of gemSet) {
        gemCount.set(e, 0);
    }

    gems.forEach((gem, i) => {
        gemSelect.add(gem);
        gemCount.set(gem, gemCount.get(gem) + 1);
        ++end;
        if (gemSelect.size === gemSet.size) {
            while (gemSelect.size === gemSet.size) {
                gemCount.set(gems[start], gemCount.get(gems[start]) - 1);
                if (gemCount.get(gems[start]) === 0) {
                    gemSelect.delete(gems[start]);
                }
                ++start;
            }
            answerList.push([start, end]);
        }
    });
    answerList.sort((a, b) => {
        let len1 = a[1] - a[0],
            len2 = b[1] - b[0];
        if (len1 === len2) {
            return a[0] - b[0];
        }
        return len1 - len2;
    });
    return answerList[0];
}
