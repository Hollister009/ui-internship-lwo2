export const truncateArray = (array, head) => {
  return (head === 0) ? array : array.splice(head);
};
