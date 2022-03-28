function subBlackKey(s) {
	return s.replace(/[A-Z]#/g, (match) => {
		return match[0].toLowerCase();
	});
}

function playTime(start, end) {
	let [s_hour, s_min] = start.split(":");
	let [e_hour, e_min] = end.split(":");
	return (e_hour - s_hour) * 60 + (e_min - s_min);
}

function solution(m, musicinfos) {
	let playedList = [];
	m = subBlackKey(m);
	musicinfos.forEach((musicInfo) => {
		let [begin, end, title, tabo] = musicInfo.split(",");
		let pTime = playTime(begin, end);
		tabo = subBlackKey(tabo);
		tabo =
			tabo.repeat(pTime / tabo.length) +
			tabo.substring(0, pTime % tabo.length);
		if (tabo.includes(m)) {
			playedList.push([title, pTime]);
		}
	});
	playedList.sort((a, b) => b[1] - a[1]);
	return playedList.length ? playedList[0][0] : "(None)";
}
