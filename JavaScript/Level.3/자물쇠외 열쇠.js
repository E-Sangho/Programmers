function rotateKey(key) {
	let M = key.length;
	let keyRotated = Array.from({ length: M }, () => {
		return Array.from({ length: M }, () => 0);
	});
	for (let i = 0; i < M; ++i) {
		for (let j = 0; j < M; ++j) {
			keyRotated[j][M - 1 - i] = key[i][j];
		}
	}
	return keyRotated;
}

function checkKey(i, j, blankNum, key, board) {
	let M = key.length;
	let keyCopy = JSON.parse(JSON.stringify(key));
	for (let k = 0; k < 4; ++k) {
		let count = 0,
			notCorrect = false;
		for (let x = 0; x < M; ++x) {
			for (let y = 0; y < M; ++y) {
				if (keyCopy[x][y] === 1 && !notCorrect) {
					if (board[i + x][j + y] === 1) {
						notCorrect = true;
					}
					if (board[i + x][j + y] === 0) {
						++count;
					}
				}
			}
		}
		if (!notCorrect && count === blankNum) {
			return true;
		}
		keyCopy = rotateKey(keyCopy);
	}
	return false;
}

function calBlankNum(lock, board, M) {
	let N = lock.length;
	let count = 0;
	for (let i = 0; i < N; ++i) {
		for (let j = 0; j < N; ++j) {
			board[i + M - 1][j + M - 1] = lock[i][j];
			if (lock[i][j] === 0) {
				++count;
			}
		}
	}
	return count;
}

function solution(key, lock) {
	let N = lock.length,
		M = key.length;
	let boardSize = N + 2 * (M - 1);
	let board = Array.from({ length: boardSize }, () => {
		return Array.from({ length: boardSize }, () => -1);
	});
	let blankNum = calBlankNum(lock, board, M);
	for (let i = 0; i < boardSize - M + 1; ++i) {
		for (let j = 0; j < boardSize - M + 1; ++j) {
			if (checkKey(i, j, blankNum, key, board)) {
				return true;
			}
		}
	}
	return false;
}
