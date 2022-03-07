function BFS(begin, target, words) {
    const n = words.length;

    function DifferOne(a, b) {
        let len = a.length;
        let cnt = 0;
        for (let i = 0; i < len; ++i) {
            if (a[i] !== b[i]) {
                ++cnt;
            }
        }
        if (cnt === 1) return true;
        return false;
    }

    function BFSUtil(begin) {
        let queue = [];
        queue.push([begin, 0]);
        while (queue.length > 0) {
            let word = queue[0][0],
                num = queue[0][1];
            if (word === target) {
                return num;
            }
            if (num > n) return 0;
            queue.shift();
            for (let i = 0; i < n; ++i) {
                if (DifferOne(word, words[i])) {
                    queue.push([words[i], num + 1]);
                }
            }
        }
        return 0;
    }
    return BFSUtil(begin);
}

function solution(begin, target, words) {
    return BFS(begin, target, words);
}
