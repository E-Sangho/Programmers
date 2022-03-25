function C(n, r) {
	let answer = [];
	let selected = Array(r);
	function CUtil(start, index) {
		if (index === r) {
			answer.push(selected.slice());
			return;
		}
		for (let i = start; i < n && n - i >= r - index; ++i) {
			selected[index] = i;
			CUtil(i + 1, index + 1);
		}
	}
	CUtil(0, 0);
	return answer;
}

function solution(relation) {
	let n = relation[0].length;
	let rowSize = relation.length;
	let answer = [];
	for (let r = 1; r <= n; ++r) {
		let nCr = C(n, r);
		nCr.forEach((set) => {
			let map = new Map();
			relation.forEach((list) => {
				let tempString = "";
				for (let x of set) {
					tempString += list[x];
				}
				map.set(tempString, 1);
			});
			if (map.size === rowSize) {
				answer.push(set.join(""));
			}
		});
	}
	answer.sort((a, b) => a.length - b.length);
	let picked = [];
	answer.forEach((x) => {
		let flag = true;
		picked.forEach((y) => {
			let flag2 = true;
			for (let i = 0; i < y.length; ++i) {
				flag2 = flag2 && x.includes(y[i]);
			}
			if (flag2) {
				flag = false;
			}
		});
		if (flag) {
			picked.push(x);
		}
	});
	return picked.length;
}
