class Node {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.index = index;
		this.left = null;
		this.right = null;
	}
}

class Graph {
	constructor() {
		this.root = null;
		this.preOrder = [];
		this.postOrder = [];
	}

	addChild(curNode, node) {
		if (node.x < curNode.x) {
			if (curNode.left === null) {
				curNode.left = node;
				return;
			}
			this.addChild(curNode.left, node);
			return;
		}
		if (curNode.right === null) {
			curNode.right = node;
			return;
		}
		this.addChild(curNode.right, node);
	}

	addNode(node) {
		const [x, y, index] = node;
		let newNode = new Node(x, y, index);
		if (this.root === null) {
			this.root = newNode;
			return;
		}
		this.addChild(this.root, newNode);
	}

	findOrder(node) {
		this.preOrder.push(node.index);
		if (node.left) {
			this.findOrder(node.left);
		}
		if (node.right) {
			this.findOrder(node.right);
		}
		this.postOrder.push(node.index);
	}
}

function solution(nodeinfo) {
	let nodes = nodeinfo.map((info, index) => [...info, index + 1]);
	nodes.sort((a, b) => b[1] - a[1]);
	let graph = new Graph();
	nodes.forEach((node) => graph.addNode(node));
	graph.findOrder(graph.root);
	return [graph.preOrder, graph.postOrder];
}
