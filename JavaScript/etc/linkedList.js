class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	pushHead(data) {
		++this.size;
		let newNode = new Node(data);
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
			return newNode;
		}
		newNode.next = this.head;
		this.head = newNode;
		return newNode;
	}

	pushTail(data) {
		++this.size;
		let newNode = new Node(data);
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
			return newNode;
		}
		this.tail.next = newNode;
		this.tail = newNode;
		return newNode;
	}

	pushAt(data, index) {
		if (index > this.size - 1) {
			return new Error("Insert out of bounds");
		}
		++this.size;
		if (index === 0) {
			return this.pushHead(data);
		}
		let previousNode = null;
		let currentNode = this.head;
		let newNode = Node(data);
		for (let i = 0; i < index; ++i) {
			previousNode = currentNode;
			currentNode = currentNode.next;
		}
		previousNode.next = newNode;
		newNode.next = currentNode;
		return newNode;
	}
	print() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}

	removeHead() {
		if (this.head) {
			--this.size;
			const headNode = this.head;
			this.head = this.head.next;
			return headNode;
		}
		return undefined;
	}

	removeTail() {
		if (this.tail) {
			--this.size;
			const tailNode = this.tail;
			let currentNode = this.head;
			while (currentNode.next !== tailNode) {
				currentNode = currentNode.next;
			}
			const beforeTail = currentNode;
			this.tail = beforeTail;
			this.tail.next = null;
			return tailNode;
		}
		return undefined;
	}

	removeAt(index) {
		if (index > this.size - 1) {
			return new Error("Remove index out of bounds");
		}
		--this.size;
		if (index === 0) {
			return this.removeHead();
		}
		let previousNode = null;
		let currentNode = this.head;
		for (let i = 0; i < index; ++i) {
			previousNode = currentNode;
			currentNode = currentNode.next;
		}
		previousNode.next = currentNode.next;
		return currentNode;
	}

	size() {
		return this.size;
	}
}
