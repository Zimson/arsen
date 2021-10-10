import HttpRequestService, {createUrlEncodedData} from '../HttpRequestService';

export default class ApiService {
  static getIp = () => HttpRequestService.getJson('https://api.ipify.org?format=json').then(data => data.ip);
  
  static sendPartnershipRequest = ({body, headers = {}, ...restParams}) => HttpRequestService.post('https://arsenalpay.ru/pay-api/lead.php',{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;',
      ...headers
    },
    body: createUrlEncodedData(body),
    ...restParams,
  })
    .then(HttpRequestService.dataTypeToDecoder[HttpRequestService.dataTypes.text]);
}
