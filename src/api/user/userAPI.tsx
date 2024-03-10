import { apiConfig } from '../../config/config';
import { APIService } from '../axiosInstance';

const mainPath = 'login';

const userAPI = {
  login: (email: string) => {
    return APIService.post<string>(`${apiConfig}/${mainPath}`, { email }).then(({ data }) => data);
  },
};

export { userAPI };
