import request from "./request";

export const CartCreateApi = (params) => request.post("/carts", params);

export const CartGetApi = (params) => request.get(`/carts`, params);
