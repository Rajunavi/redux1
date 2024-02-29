import { product } from "../action/productAction";

const init = [];
export const productReduser = (state = init, { type, payload }) => {
  switch (type) {
    case product:
      return payload;
    default:
      return state;
  }
};
