export const increment = (em) => {
  return {
    type: "increment",
    payload : em
  };
};
export const decrement = (em) => {
  return {
    type: "decrement",
    payload : em
  };
};
export const getUser = list => {
  return {
    type: "fetched",
    payload: list
  };
};
