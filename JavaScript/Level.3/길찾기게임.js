function getNextLevel(graph) {
	let levelList = new Set();
	graph.forEach((node) => {
		levelList.add(node[1]);
	});
	levelList = Array.from(levelList);
	levelList.sort((a, b) => (a < b ? 1 : -1));
	let nextLevel = new Map();
	for (let i = 0; i < levelList.length - 1; ++i) {
		nextLevel.set(levelList[i], levelList[i + 1]);
	}
	nextLevel.set(levelList[levelList.length - 1], 0);
	return nextLevel;
}

function makeGraph(nodeinfo) {
	let graph = [];
	nodeinfo.forEach((info, index) => {
		let [x, y] = info;
		graph.push([x, y, index + 1]);
	});
	graph.sort((a, b) => {
		if (a[1] === b[1]) {
			return a[0] < b[0] ? -1 : 1;
		}
		return a[1] < b[1] ? 1 : -1;
	});
	return graph;
}

function makeMarked(graph) {
	let marked = new Map();
	graph.forEach((node) => {
		marked.set(node, false);
	});
	return marked;
}

function getLeftChild(x, childHeight, graph, marked, minLeft) {
	let leftChild = graph.find((node) => {
		if (
			!marked.get(node) &&
			node[1] === childHeight &&
			node[0] < x &&
			minLeft < node[0]
		) {
			return true;
		}
		return false;
	});
	return leftChild;
}

function getRightChild(x, childHeight, graph, marked, maxRight) {
	let rightChild = graph.find((node) => {
		if (
			!marked.get(node) &&
			node[1] === childHeight &&
			x < node[0] &&
			node[0] < maxRight
		) {
			return true;
		}
		return false;
	});
	return rightChild;
}

function DFS(
	preOrder,
	parentNode,
	minLeft,
	maxRight,
	marked,
	nextLevel,
	graph
) {
	let [x, y, index] = parentNode;
	let childHeight = nextLevel.get(y);
	let leftChild = getLeftChild(x, childHeight, graph, marked, minLeft);
	let rightChild = getRightChild(x, childHeight, graph, marked, maxRight);
	let postOrder = [];

	preOrder.push(index);

	if (!leftChild && !rightChild) {
		return [index];
	}

	if (leftChild) {
		marked.set(leftChild, true);
		left = DFS(preOrder, leftChild, minLeft, x, marked, nextLevel, graph);
		postOrder = [...postOrder, ...left];
	}
	if (rightChild) {
		marked.set(rightChild, true);
		right = DFS(
			preOrder,
			rightChild,
			x,
			maxRight,
			marked,
			nextLevel,
			graph
		);
		postOrder = [...postOrder, ...right];
	}
	postOrder.push(index);

	return postOrder;
}

function solution(nodeinfo) {
	let graph = makeGraph(nodeinfo);
	let nextLevel = getNextLevel(graph);
	let marked = makeMarked(graph);
	let preOrder = [];
	let postOrder = DFS(
		preOrder,
		graph[0],
		-1,
		100001,
		marked,
		nextLevel,
		graph
	);
	return [preOrder, postOrder];
}
