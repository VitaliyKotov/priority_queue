const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	push(data, priority) {
		
	}

	pop() {
		
	}

	detachRoot() {

		let detachedRoot = this.root;
		
		if(this.parentNodes[0] == detachedRoot) {
			this.parentNodes.shift();
		}

		this.root = null;
		return detachedRoot;
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.length;
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		this.length++;
		if(!this.root) {
			this.root = node;
			this.parentNodes.push(node);
			return;
		}

		if (this.parentNodes[0].left === null){
        	this.parentNodes[0].appendChild(node);
        	this.parentNodes.push(node);        	
		} else {
			this.parentNodes[0].appendChild(node);
        	this.parentNodes.push(node);
        	this.parentNodes.shift();
		}
		
	}

	shiftNodeUp(node) {

		let parent = node.parent;
		let nodeIndex = this.parentNodes.indexOf(node);
		let parentIndex = this.parentNodes.indexOf(parent);
		if(parent && parent.priority < node.priority) {
			this.parentNodes[parentIndex] = node;
			this.parentNodes[nodeIndex] = parent;
			node.swapWithParent();
			this.shiftNodeUp(node);
		} else {
			this.root = node;
		}
			
	}

	shiftNodeDown(node) {
		if (node === null || node.left === null) {
			return;
		}

		if (node.left) {
			var childToShift = node.left;
			if (node.right && childToShift.priority <= node.right.priority) { // check if node has right child and if its priority greater than left's child
				childToShift = node.right; // if so we will move right, to ensure greater priority to be higher
			}
			if (childToShift.priority > node.priority) {
				let childToShiftIndex = this.parentNodes.indexOf(childToShift);
				let nodeIndex = this.parentNodes.indexOf(node);
				if (node === this.root) {
					this.root = childToShift;
				}
				if (nodeIndex === -1) {
					this.parentNodes[childToShiftIndex] = node;
				} else {
					this.parentNodes[nodeIndex] = childToShift;
					this.parentNodes[childToShiftIndex] = node;
				}
				childToShift.swapWithParent();
				this.shiftNodeDown(node);

			}

		}

	}

}
		

module.exports = MaxHeap;
