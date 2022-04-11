function isBoardCorrect(x, y, pillarTable, boardTable) {
	if (
		pillarTable.has(`${x},${y - 1}`) ||
		pillarTable.has(`${x + 1},${y - 1}`) ||
		(boardTable.has(`${x - 1},${y}`) && boardTable.has(`${x + 1},${y}`))
	) {
		return true;
	}
	return false;
}

function isPillarCorrect(x, y, pillarTable, boardTable) {
	if (
		y === 0 ||
		pillarTable.has(`${x},${y - 1}`) ||
		boardTable.has(`${x - 1},${y}`) ||
		boardTable.has(`${x},${y}`)
	) {
		return true;
	}
	return false;
}

function isBoardRemovable(x, y, pillarTable, boardTable) {
	if (
		pillarTable.has(`${x},${y}`) &&
		!pillarTable.has(`${x},${y - 1}`) &&
		!boardTable.has(`${x - 1},${y}`)
	) {
		return false;
	}
	if (
		pillarTable.has(`${x + 1},${y}`) &&
		!pillarTable.has(`${x + 1},${y - 1}`) &&
		!boardTable.has(`${x + 1},${y}`)
	) {
		return false;
	}
	if (
		boardTable.has(`${x - 1},${y}`) &&
		!pillarTable.has(`${x - 1},${y - 1}`) &&
		!pillarTable.has(`${x},${y - 1}`)
	) {
		return false;
	}
	if (
		boardTable.has(`${x + 1},${y}`) &&
		!pillarTable.has(`${x + 1},${y - 1}`) &&
		!pillarTable.has(`${x + 2},${y - 1}`)
	) {
		return false;
	}
	return true;
}

function isPillarRemovable(x, y, pillarTable, boardTable) {
	if (
		pillarTable.has(`${x},${y + 1}`) &&
		!boardTable.has(`${x},${y + 1}`) &&
		!boardTable.has(`${x - 1},${y + 1}`)
	) {
		return false;
	}
	if (
		boardTable.has(`${x},${y + 1}`) &&
		!pillarTable.has(`${x + 1},${y}`) &&
		!(
			boardTable.has(`${x - 1},${y + 1}`) &&
			boardTable.has(`${x + 1},${y + 1}`)
		)
	) {
		return false;
	}
	if (
		boardTable.has(`${x - 1},${y + 1}`) &&
		!pillarTable.has(`${x - 1},${y}`) &&
		!(
			boardTable.has(`${x - 2},${y + 1}`) &&
			boardTable.has(`${x},${y + 1}`)
		)
	) {
		return false;
	}
	return true;
}

function solution(n, build_frame) {
	let answer = [];
	let pillarTable = new Set();
	let boardTable = new Set();

	build_frame.forEach((order) => {
		let [x, y, isBoard, isBuild] = order;
		if (isBuild) {
			if (isBoard) {
				if (isBoardCorrect(x, y, pillarTable, boardTable)) {
					boardTable.add(`${x},${y}`);
				}
				return;
			}
			if (isPillarCorrect(x, y, pillarTable, boardTable)) {
				pillarTable.add(`${x},${y}`);
			}
			return;
		}
		if (isBoard) {
			if (isBoardRemovable(x, y, pillarTable, boardTable)) {
				boardTable.delete(`${x},${y}`);
			}
			return;
		}
		if (isPillarRemovable(x, y, pillarTable, boardTable)) {
			pillarTable.delete(`${x},${y}`);
		}
	});
	for (let key of pillarTable) {
		const [x, y] = key.split(",");
		answer.push([Number(x), Number(y), 0]);
	}
	for (let key of boardTable) {
		const [x, y] = key.split(",");
		answer.push([Number(x), Number(y), 1]);
	}
	answer.sort((a, b) => {
		let [x_a, y_a, isBoard_a] = a,
			[x_b, y_b, isBoard_b] = b;
		if (x_a === x_b) {
			if (y_a === y_b) {
				return isBoard_a < isBoard_b ? -1 : 1;
			}
			return y_a < y_b ? -1 : 1;
		}
		return x_a < x_b ? -1 : 1;
	});
	return answer.length > 0 ? answer : [[]];
}
