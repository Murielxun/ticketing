import axios from 'axios';

export default ({ req }) => {
  // window is only existed in browser, not in node js environment
  if (typeof window === 'undefined') {
    // on the server
    // request should be made to http:ingress-nginx-controller....
    // also need to specify the domain (host)
    return axios.create({
      baseURL:
        'http://www.murielxun-ticketing-app-prod.xyz/',
      headers: req.headers,
    });
  } else {
    // we are in browser
    // request can be made with a base url of ''
    // rely on browser to put the base url for us
    return axios.create({
      baseUrl: '/',
    });
  }
};
