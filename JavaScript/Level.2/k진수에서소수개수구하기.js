function changeDigit(n, k) {
	let s = "";
	while (n > 0) {
		let quotient = Math.floor(n / k);
		let remainder = n % k;
		n = quotient;
		s = remainder + s;
	}
	return s;
}

function isPrime(p) {
	if (p < 2) return false;
	let maxNum = Math.floor(Math.sqrt(p));
	for (let i = 2; i <= maxNum; ++i) {
		if (p % i === 0) {
			return false;
		}
	}
	return true;
}

function solution(n, k) {
	var answer = 0;
	let kDigit = changeDigit(n, k);
	kDigit.split("0").forEach((p) => {
		if (isPrime(p)) {
			answer += 1;
		}
	});
	return answer;
}
