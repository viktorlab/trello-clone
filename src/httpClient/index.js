import axios from 'axios';
import { API_BASE_URL } from 'constants/apiBaseUrl';
import { API_KEY, API_TOKEN } from 'constants/secrets';

class HttpClient {
  constructor() {
    this.instance = axios.create({
      baseURL: API_BASE_URL,
      params: { key: API_KEY, token: API_TOKEN },
    });

    this.initializeResponseInterceptor();
  }

  initializeResponseInterceptor() {
    this.instance.interceptors.response.use(({ data }) => data);
  }
}

export default HttpClient;
