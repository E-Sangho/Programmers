function solution(msg) {
	var answer = [];
	let dictionary = new Map();
	for (let i = 0; i < 26; ++i) {
		dictionary.set(String.fromCharCode(65 + i), i + 1);
	}
	let msgLen = msg.length;
	for (let i = 0; i < msgLen; ) {
		let j = i + 1;
		while (j <= msgLen && dictionary.has(msg.substring(i, j))) {
			++j;
		}
		if (!dictionary.has(msg.substring(i, j))) {
			dictionary.set(msg.substring(i, j--), dictionary.size + 1);
		}
		answer.push(dictionary.get(msg.substring(i, j)));
		i = j;
	}
	return answer;
}
