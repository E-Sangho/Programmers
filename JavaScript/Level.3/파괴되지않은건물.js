function solution(board, skill) {
	let answer = 0;
	const n = board.length,
		m = board[0].length;
	let prefix = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));
	let prefixSum = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));
	skill.forEach((s) => {
		let [type, r1, c1, r2, c2, degree] = s;
		if (type === 1) {
			degree = degree * -1;
		}
		prefix[r1][c1] += degree;
		prefix[r1][c2 + 1] -= degree;
		prefix[r2 + 1][c1] -= degree;
		prefix[r2 + 1][c2 + 1] += degree;
	});
	prefixSum[0][0] = prefix[0][0];
	for (let i = 1; i < n + 1; ++i) {
		prefixSum[i][0] = prefixSum[i - 1][0] + prefix[i][0];
	}
	for (let i = 1; i < m + 1; ++i) {
		prefixSum[0][i] = prefixSum[0][i - 1] + prefix[0][i];
	}
	for (let i = 1; i < n + 1; ++i) {
		for (let j = 1; j < m + 1; ++j) {
			prefixSum[i][j] =
				prefixSum[i - 1][j] +
				prefixSum[i][j - 1] +
				prefix[i][j] -
				prefixSum[i - 1][j - 1];
		}
	}
	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < m; ++j) {
			board[i][j] += prefixSum[i][j];
			if (board[i][j] > 0) ++answer;
		}
	}

	return answer;
}
