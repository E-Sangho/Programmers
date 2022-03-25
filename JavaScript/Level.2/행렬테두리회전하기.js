function makeMatrix(rows, columns) {
	let arr = Array.from({ length: rows }, () =>
		Array.from({ length: columns }, () => 0)
	);
	for (let i = 0; i < rows; ++i) {
		for (let j = 0; j < columns; ++j) {
			arr[i][j] = j + 1 + i * columns;
		}
	}
	return arr;
}

function rotateMatrix(matrix, query) {
	let [x1, y1, x2, y2] = query;
	let temp_arr = [];
	for (let j = y1 - 1; j < y2; ++j) {
		temp_arr.push(matrix[x1 - 1][j]);
	}
	for (let i = x1; i < x2; ++i) {
		temp_arr.push(matrix[i][y2 - 1]);
	}
	for (let j = y2 - 2; j >= y1 - 1; --j) {
		temp_arr.push(matrix[x2 - 1][j]);
	}
	for (let i = x2 - 2; i >= x1; --i) {
		temp_arr.push(matrix[i][y1 - 1]);
	}
	let cnt = 0;
	for (let j = y1; j < y2; ++j) {
		matrix[x1 - 1][j] = temp_arr[cnt++];
	}
	for (let i = x1; i < x2; ++i) {
		matrix[i][y2 - 1] = temp_arr[cnt++];
	}
	for (let j = y2 - 2; j >= y1 - 1; --j) {
		matrix[x2 - 1][j] = temp_arr[cnt++];
	}
	for (let i = x2 - 2; i >= x1 - 1; --i) {
		matrix[i][y1 - 1] = temp_arr[cnt++];
	}
	temp_arr.sort((a, b) => a - b);
	return [matrix, temp_arr[0]];
}

function solution(rows, columns, queries) {
	let min;
	let answer = [];
	let matrix = makeMatrix(rows, columns);
	queries.forEach((query) => {
		[matrix, min] = rotateMatrix(matrix, query);
		answer.push(min);
	});
	return answer;
}
