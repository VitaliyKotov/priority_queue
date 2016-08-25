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
		let n = this.parentNodes.indexOf(node); // index of selected node in array
		let shifted = this.parentNodes[n]; //save the selected node 
		while(n > 0) { 
			let parentIndex = Math.floor((n+1)/2)- 1,
				parent = this.parentNodes[parentIndex];

				if(shifted.priority > parent.priority) { 
					shifted.swapWithParent();
					// this.parentNodes[parentIndex] = shifted; // swap the elements if the parent is greater.
					// this.parentNodes[n] = parent;
					n = parentIndex; //update `n` to continue at the new position.
				} else {
					break; //if parent less, no need to swap
				}
				return this;
		}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
