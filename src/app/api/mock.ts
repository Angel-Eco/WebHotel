import AxiosMockAdapter from 'axios-mock-adapter';
import axios from '@/utils/axios';

const mock = new AxiosMockAdapter(axios, { delayResponse: 1 });
export default mock;
