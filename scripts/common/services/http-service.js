const API_URL = 'https://slouching.github.io/js-phone-catalogue/phones';

const HttpService = {
    sendRequest(url, {
        errorCallback,
        successCallback
    }) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', API_URL + url);
        xhr.send();

        xhr.onload = () => {
            let responseData = JSON.parse(xhr.responseText);
            successCallback(responseData);
        }

        xhr.onerror = errorCallback;
    }
}

export default HttpService;