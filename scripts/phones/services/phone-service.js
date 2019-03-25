import HttpService from '../../common/services/http-service.js';

const PhoneService = {
    getPhones(callback) {
        HttpService.sendRequest('/phones.json', {
            errorCallback: () => {},
            successCallback: callback,
        });
    },

    getPhone(phoneId, callback) {
        HttpService.sendRequest(`/${phoneId}.json`, {
            errorCallback: () => {},
            successCallback: callback,
        });
    },
}

export default PhoneService