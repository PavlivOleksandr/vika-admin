import { apiConfig } from '../../config/config';
import { APIService } from '../axiosInstance';

const mainPath = 'messages';

const messagesAPI = {
  getMessages: () => {
    return APIService.get<any>(`${apiConfig}/${mainPath}`).then(({ data }) => data);
  },
};

export { messagesAPI };
