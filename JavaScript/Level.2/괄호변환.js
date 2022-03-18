function isBalanced(s) {
    let lp = 0,
        rp = 0;
    s.split("").forEach((e) => {
        if (e === "(") ++lp;
        else ++rp;
    });
    return lp === rp;
}

function isCorrect(s) {
    let cnt = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "(") ++cnt;
        else --cnt;
        if (cnt < 0) {
            return 0;
        }
    }
    return 1;
}

function B2C(w) {
    if (w === "") return "";
    let cnt = 0;
    let i;
    for (i = 0; i < w.length; ++i) {
        if (w[i] === "(") ++cnt;
        else --cnt;
        if (cnt === 0) {
            break;
        }
    }
    let u = w.substring(0, i + 1);
    let v = w.substring(i + 1);
    if (isCorrect(u)) {
        return u + B2C(v);
    } else {
        return (
            "(" +
            B2C(v) +
            ")" +
            u
                .substring(1, u.length - 1)
                .split("")
                .map((e) => {
                    return e === "(" ? ")" : "(";
                })
                .join("")
        );
    }
}

function solution(p) {
    if (isCorrect(p)) return p;
    return B2C(p);
}
