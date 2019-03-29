import HttpService from '../../common/services/http-service.js';

const PhoneService = {
    getPhones({ query = '', orderField = '' } = {}) {
        return HttpService.sendRequest('/phones.json')
        .then(phones => {
            let filteredPhones = this._filter(phones, query);
            let sortedPhones = this._sort(filteredPhones, orderField);

            return sortedPhones;
        })
    },

    getPhone(phoneId) {
        return HttpService.sendRequest(`/${phoneId}.json`);
    },

    _filter(phones, query) {
        return phones;
    },

    _sort(phones, orderField) {
        return phones;
    },
}

export default PhoneService