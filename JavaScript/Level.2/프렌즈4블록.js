function solution(m, n, board) {
	let answer = 0;
	let Blank = String.fromCharCode("A".charCodeAt() - 1);

	function eraseBlock() {
		let cnt = 0;
		let eraseList = [];
		for (let row = 0; row < m - 1; ++row) {
			for (let column = 0; column < n - 1; ++column) {
				let key = board[row][column];
				if (key === Blank) {
					continue;
				}
				if (
					key === board[row + 1][column] &&
					key === board[row][column + 1] &&
					key === board[row + 1][column + 1]
				) {
					eraseList.push([row, column]);
					++cnt;
				}
			}
		}
		eraseList.forEach((list) => {
			let [row, column] = list;
			board[row] =
				board[row].substring(0, column) +
				Blank +
				Blank +
				board[row].substring(column + 2);
			board[row + 1] =
				board[row + 1].substring(0, column) +
				Blank +
				Blank +
				board[row + 1].substring(column + 2);
		});
		return cnt;
	}

	function updateBlock() {
		for (let column = 0; column < n; ++column) {
			let row = m - 1;
			while (row >= 0) {
				if (board[row][column] === Blank) {
					break;
				}
				--row;
			}
			let temp_arr = [];
			let numBlank = 0;
			for (let i = 0; i <= row; ++i) {
				if (board[i][column] !== Blank) {
					temp_arr.push(board[i][column]);
				} else {
					++numBlank;
				}
			}
			console.log(temp_arr);
			console.log(numBlank);
			let index = 0;
			for (let i = 0; i < temp_arr.length; ++i) {
				if (numBlank > 0) {
					board[i] =
						board[i].substring(0, column) +
						Blank +
						board[i].substring(column + 1);
					--numBlank;
				} else {
					board[i] =
						board[i].substring(0, column) +
						temp_arr[index++] +
						board[i].substring(column + 1);
				}
			}
		}
	}

	while (eraseBlock() > 0) {
		console.log(board);
		updateBlock();
		console.log(board);
	}

	for (let i = 0; i < m; ++i) {
		for (let j = 0; j < n; ++j) {
			if (board[i][j] === Blank) {
				++answer;
			}
		}
	}
	return answer;
}
