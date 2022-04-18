const rowMove = [1, 0, -1, 0],
	colMove = [0, 1, 0, -1];

function robotLocation(row, col, direction) {
	if (direction === "right") {
		return [row, col + 1];
	}
	return [row + 1, col];
}

function isNotBlocked(row, col, board) {
	const n = board.length;
	if (0 <= row && row < n && 0 <= col && col < n && board[row][col] === 0) {
		return true;
	}
	return false;
}

function ifShorterAddToQueue(robot, nextRobot, queue, dp) {
	let [row, col, direction] = robot,
		[nextRow, nextCol, nextDirection] = nextRobot;
	if (dp[row][col][direction] + 1 < dp[nextRow][nextCol][nextDirection]) {
		dp[nextRow][nextCol][nextDirection] = dp[row][col][direction] + 1;
		queue.push([nextRow, nextCol, nextDirection]);
	}
}

function BFS(dp, board) {
	let queue = [];
	const n = board.length;
	queue.push([0, 0, "right"]);
	dp[0][0]["right"] = 0;
	while (queue.length > 0) {
		let [row, col, direction] = queue.shift();
		let robot = [row, col, direction];
		if (row < 0 || n - 1 < row || col < 0 || n - 1 < col) {
			continue;
		}
		let [nrow, ncol] = robotLocation(row, col, direction);

		// move
		for (let i = 0; i < 4; ++i) {
			if (
				isNotBlocked(row + rowMove[i], col + colMove[i], board) &&
				isNotBlocked(nrow + rowMove[i], ncol + colMove[i], board)
			) {
				let nextRobot = [row + rowMove[i], col + colMove[i], direction];
				ifShorterAddToQueue(robot, nextRobot, queue, dp);
			}
		}

		// rotate

		if (direction === "right") {
			if (
				isNotBlocked(nrow - 1, ncol, board) &&
				isNotBlocked(row - 1, col, board)
			) {
				let nextRobot = [row - 1, col, "down"];
				ifShorterAddToQueue(robot, nextRobot, queue, dp);
				nextRobot = [row - 1, col + 1, "down"];
				ifShorterAddToQueue(robot, nextRobot, queue, dp);
			}
			if (
				isNotBlocked(nrow + 1, ncol, board) &&
				isNotBlocked(row + 1, col, board)
			) {
				let nextRobot = [row, col, "down"];
				ifShorterAddToQueue(robot, nextRobot, queue, dp);
				nextRobot = [row, col + 1, "down"];
				ifShorterAddToQueue(robot, nextRobot, queue, dp);
			}
		}
		if (direction === "down") {
			if (
				isNotBlocked(nrow, ncol - 1, board) &&
				isNotBlocked(row, col - 1, board)
			) {
				let nextRobot = [row, col - 1, "right"];
				ifShorterAddToQueue(robot, nextRobot, queue, dp);
				nextRobot = [row + 1, col - 1, "right"];
				ifShorterAddToQueue(robot, nextRobot, queue, dp);
			}
			if (
				isNotBlocked(nrow, ncol + 1, board) &&
				isNotBlocked(row, col + 1, board)
			) {
				let nextRobot = [row, col, "right"];
				ifShorterAddToQueue(robot, nextRobot, queue, dp);
				nextRobot = [row + 1, col, "right"];
				ifShorterAddToQueue(robot, nextRobot, queue, dp);
			}
		}
	}
}

function solution(board) {
	const n = board.length;
	let dp = Array.from({ length: n }, () =>
		Array.from({ length: n }, () => ({
			right: 50000000,
			down: 50000000,
		}))
	);
	BFS(dp, board);
	return Math.min(dp[n - 1][n - 2]["right"], dp[n - 2][n - 1]["down"]);
}
