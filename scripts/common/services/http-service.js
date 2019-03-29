// https://slouching.github.io/js-phone-catalogue/phones
const API_URL = 'http://localhost:3000/phones';

const HttpService = {
    sendRequest(url) {
        return fetch(API_URL + url)
            .then(response => response.json());
        // return new Promise((resolve, reject) => {
        //     let xhr = new XMLHttpRequest();
        //     xhr.open('GET', API_URL + url, true);
        //     xhr.send();
        //
        //     xhr.onload = () => {
        //         if(xhr.status !== 200) {
        //             reject(new Error('Error'));
        //             return;
        //         }
        //
        //         let responseData = JSON.parse(xhr.responseText);
        //         resolve(responseData);
        //     }
        //
        //     xhr.onerror = reject;
        // })
    }
}

export default HttpService;

function getUser(url, successCallback, errorCallBack) {
    HttpService.sendReguest(`api/${url}`, successCallback);
}

function getAccessRight(id, successCallBack, errorCallback) {}
function getContent(userId, accessRights, callback, errorCallback) {}