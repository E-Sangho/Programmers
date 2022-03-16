function split(s, k) {
    let temp_s = "";
    for (let i = 0; i < s.length; i += k) {
        let cnt = 1;
        while (s.substring(i, i + k) === s.substring(i + k, i + 2 * k)) {
            i += k;
            ++cnt;
        }
        if (cnt > 1) {
            temp_s += `${cnt}` + s.substring(i, i + k);
        } else {
            temp_s += s.substring(i, i + k);
        }
    }
    return temp_s;
}

function solution(s) {
    let min_s = s;
    let n = s.length;
    for (let k = 1; k < n; ++k) {
        let temp_s = split(s, k);
        if (temp_s.length < min_s.length) {
            min_s = temp_s;
        }
    }
    return min_s.length;
}
