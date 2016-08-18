class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(!this.left) {
			this.left = node;
			node.parent = this;
			return;
		}
		
		if(this.left) {
			this.right = node;
			node.parent = this;
			return;
		}

		if(this.left && this.right) {
			return;
		}
	}

	removeChild(node) {
		if(this.left == node) {
			this.left = null;
			node.parent = null;
			return;
		}

		if(this.right == node) {
			this.right = null;
			node.parent = null;
			return;
		}
		 if(!(this.right == node) && !(this.left == node)) {
		 	throw new Error ('passed node is not a child of this node');
		 }
	}

	remove() {
		if(this.parent === null) {
			return;
		} else {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if(this.parent === null) {return}
		let parent = this.parent,
			parentOfParent = parent.parent,
			leftChild = this.left,
			rightChild = this.right;

		if(parentOfParent) { 
			if(parentOfParent.left == parent) {
				parentOfParent.left = this;
			} else {
				parentOfParent.right = this;
			}
		}
		if(this.parent) {
			if(this.parent.left == this) {
				this.parent.parent = this;
				this.parent = parentOfParent;
				this.parent.right.parent = this;
				this.right = this.parent.right;
				leftChild.parent = this.parent;
				this.parent.left = leftChild;
				rightChild.parent = this.parent;
				this.parent.right = rightChild;
				this.left = this.parent;
				
			} else {
				this.parent.parent = this;
				this.parent = parentOfParent;
				this.parent.left.parent = this;
				this.left = this.parent.left;
				leftChild.parent = this.parent;
				this.parent.left = leftChild;
				rightChild.parent = this.parent;
				this.parent.right = rightChild;
				this.right = this.parent;
			}
		}
	}
}

module.exports = Node;
