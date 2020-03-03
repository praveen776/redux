const users = (state=[], action) => {
  switch (action.type) {
    case "fetched":
      return {
        state: action.payload
      };
    default:
      return {
        state
      };
  }
};

export default users;
