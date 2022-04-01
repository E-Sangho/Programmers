function convertTime(s) {
	let [hh, mm] = s.split(":");
	return Number(hh) * 60 + Number(mm);
}

function calFee(fees, x) {
	let [basicTime, basicFee, unitTime, unitFee] = fees;
	if (x <= basicTime) {
		return basicFee;
	}
	return basicFee + Math.ceil((x - basicTime) / unitTime) * unitFee;
}

function solution(fees, records) {
	let temp_arr = [];
	let map = new Map();
	records.forEach((record) => {
		let [time, carNum, his] = record.split(" ");
		time = convertTime(time);
		if (!map.has(carNum)) {
			map.set(carNum, 0);
		}
		if (his === "IN") {
			map.set(carNum, map.get(carNum) - time);
		} else {
			map.set(carNum, map.get(carNum) + time);
		}
	});
	for (let [key, value] of map) {
		if (value <= 0) {
			value += convertTime("23:59");
		}
		temp_arr.push([key, calFee(fees, value)]);
	}
	return temp_arr.sort((a, b) => (a < b ? -1 : 0)).map((e) => e[1]);
}
