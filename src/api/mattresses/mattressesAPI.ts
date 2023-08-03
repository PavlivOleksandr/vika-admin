import { apiConfig } from '../../config/config';
import { APIService } from '../axiosInstance';
import { MattressConfigurationModel, MattressModel, SimpleProductModel } from '../../interfaces/products';

const mattressesAPI = {
  getAll: (search: string) => {
    return APIService.get<SimpleProductModel[]>(`${apiConfig}/mattresses`, { params: { search } }).then(({ data }) => data);
  },
  getById: (id: string) => {
    return APIService.get<MattressModel>(`${apiConfig}/mattresses/${id}`).then(({ data }) => data);
  },
  getPricingByArticle: (article: string) => {
    return APIService.get<MattressConfigurationModel[]>(`${apiConfig}/mattresses/price`, { params: { article } }).then(({ data }) => data);
  },
  create: (mattress: any) => {
    return APIService.post<SimpleProductModel>(`${apiConfig}/mattresses`, mattress).then(({ data }) => data);
  },
  update: (id: string, mattress: MattressModel) => {
    return APIService.put<SimpleProductModel>(`${apiConfig}/mattresses${id}`, mattress).then(({ data }) => data);
  },

  delete: (id: string) => {
    return APIService.delete(`${apiConfig}/mattresses/${id}`).then(({ data }) => data);
  },
};

export { mattressesAPI };
