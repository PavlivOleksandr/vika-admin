import { apiConfig } from '../../config/config';
import { APIService } from '../axiosInstance';
import { MattressModel } from '../../interfaces/mattress';
import { SimpleProductModel } from '../../interfaces/products';

const mainPath = 'mattresses';

const mattressesAPI = {
  getAll: (search: string) => {
    return APIService.get<SimpleProductModel[]>(`${apiConfig}/${mainPath}`, { params: { search } }).then(({ data }) => data);
  },
  getById: (id: string) => {
    return APIService.get<MattressModel>(`${apiConfig}/${mainPath}/${id}`).then(({ data }) => data);
  },
  getPricingByArticle: (article: string) => {
    return APIService.get<any>(`${apiConfig}/${mainPath}/prices`, { params: { article } }).then(({ data }) => data);
  },
  create: (mattress: any) => {
    return APIService.post<MattressModel>(`${apiConfig}/${mainPath}`, mattress).then(({ data }) => data);
  },
  uploadPriceList: (priceListFile: FormData) => {
    return APIService.post(`${apiConfig}/${mainPath}/prices`, priceListFile).then(({ data }) => data);
  },
  update: (id: string, mattress: MattressModel) => {
    return APIService.patch<MattressModel>(`${apiConfig}/${mainPath}/${id}`, mattress).then(({ data }) => data);
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

  delete: (id: string) => {
    return APIService.delete(`${apiConfig}/${mainPath}/${id}`).then(({ data }) => data);
  },
};

export { mattressesAPI };
