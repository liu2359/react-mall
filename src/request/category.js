import request from "./request";

export const CategoryListApi = (params) => request.get("/categories", { params });
