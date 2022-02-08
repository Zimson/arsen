import fetch from 'unfetch';

export const createUrlEncodedData = dataObj => Object.keys(dataObj)
  .filter(key => dataObj.hasOwnProperty(key))
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(dataObj[key])}`)
  .join('&');

export default class HttpRequestService {
  static dataTypes = {
    json: 'json',
    text: 'text',
    blob: 'blob',
  }
  
  static post = (url, options) => fetch(url, {method: 'POST', ...options});
  
  static get = (url) => fetch(url);
  
  static getDataFromJson = data => data.json();
  
  static getDataFromText = data => data.text();
  
  static getDataFromBlob = data => data.json();
  
  static dataTypeToDecoder = {
    [HttpRequestService.dataTypes.json]: HttpRequestService.getDataFromJson,
    [HttpRequestService.dataTypes.text]: HttpRequestService.getDataFromText,
    [HttpRequestService.dataTypes.blob]: HttpRequestService.getDataFromBlob,
  };
  
  static getJson = (url) => HttpRequestService.get(url).then(HttpRequestService.getDataFromJson);
  
  static postUrlEncoded = (url, {
                             headers = {},
                             body = {},
                             ...options
                           },
                           dataType = HttpRequestService.dataTypes.json
  ) =>
    HttpRequestService.post(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;',
        ...headers
      },
      body: createUrlEncodedData(body),
      ...options
    })
      .then(HttpRequestService.dataTypeToDecoder[dataType]);
}
