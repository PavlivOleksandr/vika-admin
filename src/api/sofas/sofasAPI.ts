import { apiConfig } from '../../config/config';
import { SofaModel } from '../../interfaces/sofa';
import { APIService } from '../axiosInstance';
import { SimpleProductModel } from '../../interfaces/products';

const mainPath = 'sofas';

const sofasAPI = {
  getAll: (search: string) => {
    return APIService.get<SimpleProductModel[]>(`${apiConfig}/${mainPath}`, { params: { search } }).then(({ data }) => data);
  },
  getById: (id: string) => {
    return APIService.get<SofaModel>(`${apiConfig}/${mainPath}/${id}`).then(({ data }) => data);
  },
  getPricingByArticle: (article: string) => {
    return APIService.get<any[]>(`${apiConfig}/${mainPath}/prices`, { params: { article } }).then(({ data }) => data);
  },
  create: (sofa: any) => {
    return APIService.post<SimpleProductModel>(`${apiConfig}/${mainPath}`, sofa).then(({ data }) => data);
  },
  uploadPriceList: (priceListFile: FormData) => {
    return APIService.post(`${apiConfig}/${mainPath}/prices`, priceListFile).then(({ data }) => data);
  },
  uploadAvatar: (image: FormData) => {
    return APIService.post(`${apiConfig}/${mainPath}/avatar`, image).then(({ data }) => data);
  },
  uploadImage: (image: FormData) => {
    return APIService.post(`${apiConfig}/${mainPath}/image`, image).then(({ data }) => data);
  },
  updateImages: (newImage: FormData, imageUrl: string) => {
    return APIService.patch(`${apiConfig}/${mainPath}/image`, newImage, { params: { imageUrl } }).then(({ data }) => data);
  },
  update: (id: string, sofa: any) => {
    return APIService.patch<SofaModel>(`${apiConfig}/${mainPath}/${id}`, sofa).then(({ data }) => data);
  },

  delete: (id: string) => {
    return APIService.delete(`${apiConfig}/${mainPath}/${id}`).then(({ data }) => data);
  },
};

export { sofasAPI };
