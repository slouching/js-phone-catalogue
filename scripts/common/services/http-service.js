const HttpService = {
    sendRequest(url, {
        errorCallback,
        successCallback
    }) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {
            let responseData = JSON.parse(xhr.responseText);
            successCallback(responseData);
        }

        xhr.onerror = errorCallback;
    }
}

export default HttpService;