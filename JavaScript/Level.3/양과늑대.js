function solution(info, edges) {
	const n = info.length;
	let nodes = Array.from({ length: n }, () => []);
	let marked = Array.from({ length: n }, () => false);
	let maxSheep = 0;
	edges.forEach((edge) => {
		let [x, y] = edge;
		nodes[x].push(y);
		nodes[y].push(x);
	});
	marked[0] = true;
	function nextNodeHasSheep(nextNode) {
		for (let i = 0; i < nextNode.length; ++i) {
			if (info[nextNode[i]] === 0) {
				return true;
			}
		}
		return false;
	}
	function DFS(nextNode, sheep, wolf, marked) {
		let newMarked = marked.slice();
		while (nextNodeHasSheep(nextNode)) {
			nextNode.forEach((node, i) => {
				if (info[node] === 0) {
					++sheep;
					newMarked[node] = true;
					nextNode.splice(i, 1);
					nodes[node].forEach((edge) => {
						if (!newMarked[edge]) {
							nextNode.push(edge);
						}
					});
				}
			});
		}
		maxSheep = Math.max(maxSheep, sheep);
		nextNode.forEach((node) => {
			if (sheep > wolf + 1) {
				const choosed = node;
				const filtered = nextNode.filter((e) => e !== node);
				newMarked[node] = true;
				nodes[node].forEach((e) => {
					if (!newMarked[e]) {
						filtered.push(e);
					}
				});
				DFS(filtered, sheep, wolf + 1, newMarked);
				newMarked[node] = false;
			}
		});
	}
	DFS(nodes[0], 1, 0, marked);
	return maxSheep;
}
