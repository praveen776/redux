const counter = (counter = 0, action) => {
  switch (action.type) {
    case "increment":
      return counter + action.payload;
    case "decrement":
      return counter - action.payload;
    default:
      return counter;
  }
};

export default counter;