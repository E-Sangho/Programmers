function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const regex = new RegExp(/[a-z]{2}/);
    let set1 = new Map(),
        set2 = new Map();

    for (let i = 0; i < str1.length - 1; ++i) {
        let sub = str1.substring(i, i + 2);
        if (!regex.test(sub)) {
            continue;
        }
        if (set1.has(sub)) {
            set1.set(sub, set1.get(sub) + 1);
        } else {
            set1.set(sub, 1);
        }
    }

    for (let i = 0; i < str2.length - 1; ++i) {
        let sub = str2.substring(i, i + 2);
        if (!regex.test(sub)) {
            continue;
        }
        if (set2.has(sub)) {
            set2.set(sub, set2.get(sub) + 1);
        } else {
            set2.set(sub, 1);
        }
    }

    let inter = new Map(),
        count_i = 0,
        union = new Map(),
        count_u = 0;
    union = set1;

    for (let [key, value] of set2) {
        if (set1.has(key) && set2.has(key)) {
            inter.set(key, Math.min(set1.get(key), set2.get(key)));
        }
    }

    for (let [key, value] of set2) {
        if (union.has(key)) {
            union.set(key, Math.max(union.get(key), set2.get(key)));
        } else {
            union.set(key, value);
        }
    }

    for (let [key, value] of inter) {
        count_i += value;
    }

    for (let [key, value] of union) {
        count_u += value;
    }

    return count_u ? Math.floor((65536 * count_i) / count_u) : 65536;
}
