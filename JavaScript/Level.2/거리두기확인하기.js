function isInBox(x, y) {
	if (0 <= x && x < 5 && 0 <= y && y < 5) return true;
	return false;
}

function solution(places) {
	let answer = [];
	let move_x = [0, 0, 1, -1],
		move_y = [1, -1, 0, 0];
	let marked = Array.from({ length: 5 }, () =>
		Array.from({ length: 5 }, () => false)
	);
	function DFS(x, y, depth, place) {
		if (depth === 2) {
			return true;
		}
		let check = 1;
		for (let i = 0; i < 4; ++i) {
			let n_x = x + move_x[i],
				n_y = y + move_y[i];
			if (isInBox(n_x, n_y) && !marked[n_x][n_y]) {
				if (place[n_x][n_y] === "O") {
					marked[n_x][n_y] = true;
					check = check & DFS(n_x, n_y, depth + 1, place);
					marked[n_x][n_y] = false;
				} else if (place[n_x][n_y] === "P") {
					return 0;
				}
			}
		}
		return check;
	}
	places.forEach((place) => {
		let check = 1;
		for (let i = 0; i < 5; ++i) {
			for (let j = 0; j < 5; ++j) {
				if (place[i][j] === "P") {
					marked[i][j] = true;
					check = check & DFS(i, j, 0, place);
					marked[i][j] = false;
					if (check === 0) break;
				}
			}
			if (check === 0) break;
		}
		answer.push(check);
	});
	return answer;
}
