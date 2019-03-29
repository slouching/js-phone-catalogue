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
        const lowerQuery = query.toLowerCase();
        return phones.filter(phone => phone.name.toLowerCase().includes(lowerQuery));
    },

    _sort(phones, field) {
        return phones.sort((a, b) => {
            return a[field] > b[field] ? 1 : -1;
        });
    },
}

export default PhoneService