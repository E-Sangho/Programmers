function solution(n, t, m, p) {
	var answer = "";
	let k = 0;
	let s = "";
	while (s.length < t * m) {
		s = s + k.toString(n);
		++k;
	}
	for (let i = 0; i < t; ++i) {
		answer += s[m * i + p - 1];
	}
	return answer.toUpperCase();
}
