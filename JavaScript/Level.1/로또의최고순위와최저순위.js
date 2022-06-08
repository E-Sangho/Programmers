function solution(lottos, win_nums) {
	let min_num = 0;
	let zero_num = 0;
	lottos.forEach((num) => {
		if (num === 0) {
			zero_num += 1;
			return;
		}
		if (win_nums.includes(num)) {
			min_num += 1;
		}
	});

	return [Math.min(6, 7 - min_num - zero_num), Math.min(6, 7 - min_num)];
}
