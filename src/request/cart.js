import request from "./request";

export const CartCreateApi = (params) => request.post("/carts", params);
