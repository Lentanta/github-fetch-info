const initalState = {};

const githubInfoReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return { ...state, ...action.data }
  };
};
export default githubInfoReducer;
