function solution(files) {
	let headRegExp = new RegExp(/\D+/);
	let numberRegExp = new RegExp(/\d{1,5}/);
	files.sort((a, b) => {
		let a_head = headRegExp.exec(a)[0].toLowerCase(),
			b_head = headRegExp.exec(b)[0].toLowerCase();
		if (a_head !== b_head) {
			if (a_head < b_head) {
				return -1;
			} else {
				return 1;
			}
		}
		let a_number = Number(numberRegExp.exec(a)[0]),
			b_number = Number(numberRegExp.exec(b)[0]);
		if (a_number !== b_number) {
			return a_number - b_number;
		}
		return 0;
	});
	return files;
}
