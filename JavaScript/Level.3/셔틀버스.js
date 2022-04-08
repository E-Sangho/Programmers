/*
	solution {
    	timetable을 시간 순으로 정렬
        busTable을 n개 만들기
        while (timeTable[i] <= 09:00 && bus0.length < t) {
        	bus1.push(timeTable[i++]);
        }
        for (j = 1; j < n; ++j) {
        	while (timeTable[i] <= 09:00 + t && busj.length < t) {
            	busj.push(timeTable[i++]);
            }
        }
        if (busn-1.length < t) {
        	return 09:00 + t * (n - 1);
        }
        return busn-1[busn-1.length - 1] - "00:01";
    }
 */

function toMinutes(s) {
	const [hh, mm] = s.split(":");
	return Number(hh) * 60 + Number(mm);
}

function minToTime(x) {
	let hh = String(Math.floor(x / 60)),
		mm = String(x % 60);
	hh = hh.padStart(2, "0");
	mm = mm.padStart(2, "0");
	return hh + ":" + mm;
}

function solution(n, t, m, timetable) {
	let index = 0;
	let busTable = Array.from({ length: n }, () => []);
	let nineOClock = 540;
	let arriveTime = timetable.map((time) => toMinutes(time));
	arriveTime.sort((a, b) => (a < b ? -1 : 1));
	for (let i = 0; i < n; ++i) {
		while (
			arriveTime[index] <= nineOClock + t * i &&
			busTable[i].length < m
		) {
			busTable[i].push(arriveTime[index++]);
		}
	}
	if (busTable[n - 1].length < m) {
		return minToTime(540 + t * (n - 1));
	}
	return minToTime(busTable[n - 1][m - 1] - 1);
}
