function solution(land) {
	var answer = 0;
	let memo = [0, 0, 0, 0];
	land.forEach((num) => {
		let maxCase = [
			Math.max(memo[1], memo[2], memo[3]),
			Math.max(memo[0], memo[2], memo[3]),
			Math.max(memo[0], memo[1], memo[3]),
			Math.max(memo[0], memo[1], memo[2]),
		];
		memo = num.map((e, i) => e + maxCase[i]);
	});
	answer = Math.max(...memo);
	return answer;
}
