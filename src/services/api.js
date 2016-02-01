import { Promise } from 'q';
import f from 'fetchify';

class Api {

  github() {
    const fetch = f(Promise).fetch;
    return fetch('https://api.github.com/users/unicredit');
      // .then(function(response) {
      //   return response.json()
      // }).then(function(json) {
      //   console.log('parsed json', json)
      //   return json;
      // }).catch(function(ex) {
      //   console.log('parsing failed', ex)
      // });
    }
}

exports.Api = Api;
