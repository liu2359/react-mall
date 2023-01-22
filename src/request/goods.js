import request from "./request";

export const GoodsListApi = (params) => request.get("/products", { params });

export const GoodsImgsListApi = (params) => request.get(`/imgs/${params.id}`, { params });

export const GoodsInfoApi = (params) => request.get(`/product/${params.id}`, { params });
