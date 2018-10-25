export const traverseTree = (tree, callfunc) => {
  callfunc(tree);
  if (tree.children) {
    tree.children.forEach((t) => traverseTree(t, callfunc));
  }
};
