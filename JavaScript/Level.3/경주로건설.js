const moveX = [1, 0, -1, 0],
	moveY = [0, 1, 0, -1];

function findDirection(x, y, newX, newY) {
	const xVector = newX - x,
		yVector = newY - y;
	if (xVector === 1) {
		return 0;
	}
	if (xVector === -1) {
		return 1;
	}
	if (yVector === 1) {
		return 2;
	}
	if (yVector === -1) {
		return 3;
	}
}

function isInTheBoard(x, y, n) {
	if (0 <= x && x < n && 0 <= y && y < n) {
		return true;
	}
	return false;
}

function DFS(x, y, dp, board, direction, cost) {
	if (x === board.length - 1 && y === board.length - 1) {
		dp[x][y][direction] = Math.min(dp[x][y][direction], cost);
		return;
	}
	for (let i = 0; i < 4; ++i) {
		const newX = moveX[i] + x,
			newY = moveY[i] + y;
		if (isInTheBoard(newX, newY, board.length) && board[newX][newY] === 0) {
			const newDirection = findDirection(x, y, newX, newY);
			let addCost = 100;
			if (direction !== newDirection) {
				addCost = 600;
			}
			if (cost + addCost < dp[newX][newY][newDirection]) {
				dp[newX][newY][newDirection] = cost + addCost;
				DFS(newX, newY, dp, board, newDirection, cost + addCost);
			}
		}
	}
}

function solution(board) {
	const n = board.length;
	let dp = Array.from({ length: n }, () =>
		Array.from({ length: n }, () => Array.from({ length: 4 }, () => 250000))
	);
	DFS(0, 0, dp, board, -1, -500);
	return Math.min(...dp[n - 1][n - 1]);
}
