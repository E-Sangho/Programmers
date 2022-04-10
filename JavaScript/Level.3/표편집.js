class Row {
	constructor(index, prev = null, next = null) {
		this.index = index;
		this.prev = prev;
		this.next = next;
	}
}

class Table {
	constructor() {
		this.deleted = [];
		this.current = null;
		this.head = null;
		this.tail = null;
	}

	push(index) {
		let newRow = new Row(index);
		if (this.head === null) {
			this.head = newRow;
			this.tail = newRow;
			return;
		}
		newRow.prev = this.tail;
		this.tail.next = newRow;
		this.tail = newRow;
	}

	setCurrent(index) {
		let currentNode = this.head;
		while (currentNode.index !== index) {
			currentNode = currentNode.next;
		}
		this.current = currentNode;
	}

	up(upNum) {
		let currentNode = this.current;
		for (let i = 0; i < upNum; ++i) {
			currentNode = currentNode.prev;
		}
		this.current = currentNode;
	}

	down(downNum) {
		let currentNode = this.current;
		for (let i = 0; i < downNum; ++i) {
			currentNode = currentNode.next;
		}
		this.current = currentNode;
	}

	erase() {
		this.deleted.push(this.current);
		if (this.current === this.tail) {
			this.tail = this.tail.prev;
			this.tail.next = null;
			this.current = this.tail;
			return;
		}
		if (this.current === this.head) {
			this.head = this.head.next;
			this.head.prev = null;
			this.current = this.head;
			return;
		}
		const prevNode = this.current.prev;
		const nextNode = this.current.next;
		prevNode.next = nextNode;
		nextNode.prev = prevNode;
		this.current = nextNode;
	}

	recover() {
		const recoverNode = this.deleted.pop();
		const nextNode = recoverNode.next;
		const prevNode = recoverNode.prev;
		if (prevNode === null) {
			nextNode.prev = recoverNode;
			this.head = recoverNode;
			return;
		}
		if (nextNode === null) {
			prevNode.next = recoverNode;
			this.tail = recoverNode;
			return;
		}
		prevNode.next = recoverNode;
		nextNode.prev = recoverNode;
	}

	printOX(max) {
		let s = "";
		let currentNode = this.head;
		for (let i = 0; i < max; ++i) {
			if (currentNode !== null && currentNode.index === i) {
				s += "O";
				currentNode = currentNode.next;
				continue;
			}
			s += "X";
		}
		return s;
	}
}

function solution(n, k, cmd) {
	const table = new Table();
	for (let i = 0; i < n; ++i) {
		table.push(i);
	}
	table.setCurrent(k);

	cmd.forEach((e) => {
		switch (e[0]) {
			case "U":
				const upNum = e.split(" ")[1];
				table.up(upNum);
				break;
			case "D":
				const downNum = e.split(" ")[1];
				table.down(downNum);
				break;
			case "C":
				table.erase();
				break;
			case "Z":
				table.recover();
				break;
		}
	});
	return table.printOX(n);
}
