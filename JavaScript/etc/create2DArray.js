function arrConstuctor(n, m) {
	console.time("arrConstuctor Time");
	let arr = new Array(n);
	for (let i = 0; i < n; ++i) {
		arr[i] = new Array(m).fill(0);
	}
	console.timeEnd("arrConstuctor Time");
}

function arrConstuctor2(n, m) {
	console.time("arrConstuctor2 Time");
	let arr = [];
	for (let i = 0; i < n; ++i) {
		arr.push(new Array(m).fill(0));
	}
	console.timeEnd("arrConstuctor2 Time");
}

function useFill(n, m) {
	console.time("useFill Time");
	let arr = new Array(n).fill().map(() => new Array(m).fill(0));
	console.timeEnd("useFill Time");
}

function useArrayFrom(n, m) {
	console.time("ArrayFrom Time");
	let arr = Array.from({ length: n }, () =>
		Array.from({ length: m }, () => 0)
	);
	console.timeEnd("ArrayFrom Time");
}

function forLoop(n, m) {
	console.time("forLoop Time");
	let arr = [];
	for (let i = 0; i < n; ++i) {
		arr[i] = [];
		for (let j = 0; j < m; ++j) {
			arr[i][j] = 0;
		}
	}
	console.timeEnd("forLoop Time");
}

function jsonParse(n, m) {
	console.time("jsonParse Time");
	let arr = JSON.parse(JSON.stringify(Array(n).fill(Array(m).fill(0))));
	console.timeEnd("jsonParse Time");
}

function spread(n, m) {
	console.time("spread Time");
	let arr = [...Array(n)].map((e) => Array(m).fill(0));
	console.timeEnd("spread Time");
}

function Test(n, m) {
	console.log(`Test for n is ${n} and m is ${m}`);
	arrConstuctor(n, m);
	arrConstuctor2(n, m);
	useFill(n, m);
	useArrayFrom(n, m);
	forLoop(n, m);
	jsonParse(n, m);
	spread(n, m);
}

Test(10, 10);
Test(100, 100);
Test(1000, 1000);
Test(10000, 10000);
