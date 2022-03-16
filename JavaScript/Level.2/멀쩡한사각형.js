function Euclidean(a, b) {
    if (a === 0 || b === 0) {
        return Math.max(a, b);
    }
    if (a > b) {
        return Euclidean(b, a % b);
    } else {
        return Euclidean(a, b % a);
    }
}

function solution(w, h) {
    let gcd = Euclidean(w, h);
    let a = w / gcd;
    let b = h / gcd;
    let X = 0;
    if (w > h) {
        for (let i = 1; i < b; ++i) {
            X += Math.ceil((a / b) * i) - Math.floor((a / b) * i);
        }
        X += Math.ceil(a);
        return w * h - X * gcd;
    } else {
        for (let i = 1; i < a; ++i) {
            X += Math.ceil((b / a) * i) - Math.floor((b / a) * i);
        }
        X += Math.ceil(b);
        return w * h - X * gcd;
    }
}
/*
	Assume w >= h
    w = a * gcd, h = b * gcd, m = w / h = a / b
	Math.ceil(m)
    Math.ceil(m * 2) - Math.floor(m)
    Math.ceil(m * 3) - Math.floor(m * 2)
    ...
    Math.ceil(m * b) - Math.floor(m * (b - 1))
  +)__________________________________________
  = X
  
  w * h - X * w / a  = w * h - X * gcd
*/
