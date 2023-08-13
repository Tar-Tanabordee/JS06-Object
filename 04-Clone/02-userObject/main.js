const state1 = { username: 'john', point: 100, loading: true };

const newState = {
  ...state1,
  loading: false,
  point: 75,
  success: true
};

console.log(newState);
