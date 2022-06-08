function solution(id_list, report, k) {
	let log = {};
	let reportNum = new Map();

	Array.from(new Set(report)).map((e) => {
		const [reporter, reported] = e.split(" ");

		if (!log[reporter]) {
			log[reporter] = [];
		}
		log[reporter].push(reported);

		reportNum.set(reported, reportNum.get(reported) + 1 || 1);
	});

	return id_list.map((id) => {
		if (!log[id]) return 0;

		let num = 0;

		for (let value of log[id]) {
			if (reportNum.get(value) >= k) {
				++num;
			}
		}

		return num;
	});
}
