import { apiConfig } from '../../config/config';
import { APIService } from '../axiosInstance';
import { MattressModel, SimpleProductModel } from '../../interfaces/products';

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
    return APIService.put<MattressModel>(`${apiConfig}/${mainPath}/${id}`, mattress).then(({ data }) => data);
  },

  delete: (id: string) => {
    return APIService.delete(`${apiConfig}/${mainPath}/${id}`).then(({ data }) => data);
  },
};

export { mattressesAPI };
