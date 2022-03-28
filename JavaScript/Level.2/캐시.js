function solution(cacheSize, cities) {
	var answer = 0;
	let cache = [];
	cities.forEach((city) => {
		city = city.toUpperCase();
		if (!cache.includes(city)) {
			cache.push(city);
			answer += 5;
			if (cache.length > cacheSize) {
				cache.shift();
			}
		} else {
			let index = cache.findIndex((e) => e === city);
			cache.splice(index, 1);
			cache.push(city);
			answer += 1;
		}
	});
	return answer;
}
