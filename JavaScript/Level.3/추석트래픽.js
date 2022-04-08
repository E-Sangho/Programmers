function solution(lines) {
	let n = lines.length;
	let timeLine = lines.map((line) => {
		let [date, time, T] = line.split(" ");
		T = Number(T.substring(0, T.length - 1)) - 0.001;
		let [hh, mm, ss] = time.split(":");
		let e_time = Number(hh) * 3600 + Number(mm) * 60 + Number(ss);
		let s_time = (e_time - T).toFixed(3);
		return [s_time, e_time];
	});
	timeLine.sort((a, b) => (a[1] > b[1] ? 1 : -1));
	let mPs = timeLine.map((e, i) => {
		let eTime = e[1],
			count = 1;
		for (let x = i + 1; x < n; ++x) {
			let sTime = timeLine[x][0];
			if (sTime < eTime + 1) {
				++count;
			}
		}
		return count;
	});
	return Math.max(...mPs);
}
