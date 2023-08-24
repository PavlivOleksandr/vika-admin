import { apiConfig } from '../../config/config';
import { APIService } from '../axiosInstance';
import { SimpleProductModel, SofaModel } from '../../interfaces/products';

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
  update: (id: string, mattress: any) => {
    return APIService.put<SofaModel>(`${apiConfig}/${mainPath}/${id}`, mattress).then(({ data }) => data);
  },

  delete: (id: string) => {
    return APIService.delete(`${apiConfig}/${mainPath}/${id}`).then(({ data }) => data);
  },
};

export { sofasAPI };
