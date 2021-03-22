//==========================================
// LINEAR SEARCH
//==========================================
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] == value) {
          return i;
      }
  }
  return -1;
};

/*
You loop through an array, checking each value until you find a value that matches. At that point, you return i, the index that you are currently on. If you reach the end of the loop without finding the item then you return -1, indicating that the item wasn't found.

The best-case time complexity is O(1)
The worst case is O(n)
*/

//==========================================
// BINARY SEARCH
//==========================================
// only works on sorted arrays
/*
Narrow it down by always guessing in the middle of the range. So you would start at 50 (halfway between 0 and 100), then if you were too high go to 25 (halfway between 0 and 50), then if you were too low go to 37 (halfway between 25 and 50), and so on.
*/
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
      return index;
  }
  else if (item < value) {
      return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
      return binarySearch(array, value, start, index - 1);
  }
};

//==========================================
// SEARCHING AND TRAVERSAL IN A TREE
//==========================================
// DEPTH-FIRST SEARCH (DFS)
//==========================================

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
  }

  dfs(values=[]) {
    if (this.left) {
        values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
        values = this.right.dfs(values);
    }
    return values;
  }

  bfs(tree, values = []) {
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
        const node = queue.dequeue(); //remove from the queue
        values.push(node.value); // add that value from the queue to an array

        if (node.left) {
            queue.enqueue(node.left); //add left child to the queue
        }

        if (node.right) {
            queue.enqueue(node.right); // add right child to the queue
        }
    }

    return values;
  }
}