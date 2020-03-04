const initState = {
  state: []
}
const users = (state= initState, action) => {
  switch (action.type) {
    case "fetched":
      return {...state, state: action.payload};
    default:
      return state;
  }
};

export default users;
