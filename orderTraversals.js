dfsInOrder(values = []) {
      // First, process the left node recursively
      if (this.left) {
        values = this.left.dfsInOrder(values);
      }

      // Next, process the current node
      values.push(this.value);

      // Finally, process the right node recursively
      if (this.right) {
        values = this.right.dfsInOrder(values);
      }

      return values;
    }
    
    dfsPreOrder(values=[]) {
      // First, process the current node
      values.push(this.value);

      // Next, process the left node recursively
      if (this.left) {
        values = this.left.dfsPreOrder(values);
      }

      // Finally, process the right node recursively
      if (this.right) {
        values = this.right.dfsPreOrder(values);
      }

      return values;
    }
    
    dfsPostOrder(values = []) {
      // First, process the left node recursively
      if (this.left) {
        values = this.left.dfsPostOrder(values);
      }

      // Next, process the right node recursively
      if (this.right) {
        values = this.right.dfsPostOrder(values);
      }

      // Finally, process the current node
      values.push(this.value);

      return values;
    }
    
module.exports = {
  dfsInOrder,
  dfsPreOrder,
  dfsPostOrder,
}
