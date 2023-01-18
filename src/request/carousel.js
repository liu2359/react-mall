import request from "./request";

export const CarouselListApi = (params) => request.get("/carousels", { params });
