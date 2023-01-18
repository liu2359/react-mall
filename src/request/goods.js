import request from "./request";

export const GoodsListApi = (params) => request.get("/products", { params });
