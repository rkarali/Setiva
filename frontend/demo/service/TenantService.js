import axios from 'axios';
import constants from '@/public/demo/constants';
const PORT = constants.find((t) => t.DEV_BACKEND_PORT)?.DEV_BACKEND_PORT || 3001;

const TenantService = axios.create({
    baseURL: 'http://localhost:' + PORT + '/api',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

export default TenantService;
