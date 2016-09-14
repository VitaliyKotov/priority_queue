class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (!this.left) {
			this.left = node;
			node.parent = this;
			return;
		}

		if (!this.right) {
			this.right = node;
			node.parent = this;
			return;
		}
	}

	removeChild(node) {
		if (this.left === node) {
			this.left = null;
			node.parent = null;
			return;
		}

		if (this.right === node) {
			this.right = null;
			node.parent = null;
			return;
		}
		if (!(this.right === node) && !(this.left === node)) {
			throw new Error('passed node is not a child of this node');
		}
	}

	remove() {
		if (this.parent === null) {
			return;
		} else {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent === null) {
			return
		}
		let parent = this.parent,
			parentOfParent = parent.parent,
			leftChild = this.left,
			rightChild = this.right;

		if (parentOfParent) {
			if (parentOfParent.left == parent) {
				parentOfParent.left = this;
			} else {
				parentOfParent.right = this;
			}
		}
		if (this.parent) {
			if (this.parent.left == this) {
				this.parent.parent = this;

				if (this.parent.right) {
					this.parent.right.parent = this;
					this.right = this.parent.right;
				}

				if (leftChild) {
					leftChild.parent = this.parent;
					this.parent.left = leftChild;
				} else {
					this.parent.left = null;
				}

				if (rightChild) {
					rightChild.parent = this.parent;
					this.parent.right = rightChild;
				} else {
					this.parent.right = null;
				}

				this.left = this.parent;
				this.parent = parentOfParent;

			} else {
				this.parent.parent = this;

				if (this.parent.left) {
					this.parent.left.parent = this;
					this.left = this.parent.left;
				}
				if (leftChild) {
					leftChild.parent = this.parent;
					this.parent.left = leftChild;
				} else {
					this.parent.left = null;
				}

				if (rightChild) {
					rightChild.parent = this.parent;
					this.parent.right = rightChild;
				} else {
					this.parent.right = null;
				}

				this.right = this.parent;
				this.parent = parentOfParent;
			}
		}
	}
}

module.exports = Node;
