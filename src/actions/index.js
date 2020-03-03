export const increment = () => {
  return {
    type: "increment"
  };
};
export const decrement = () => {
  return {
    type: "decrement"
  };
};
export const getUser = list => {
  return {
    type: "fetched",
    payload: list
  };
};
