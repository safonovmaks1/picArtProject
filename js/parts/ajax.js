let ajax = () => {

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
    };

    let input = document.querySelectorAll('form > input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function formSend(elem) {
        elem.addEventListener('submit', (e) => {
            // e.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);
            let obj = {};
            formData.forEach(function (value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open("POST", 'server.php');

                    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

                    request.onreadystatechange = () => {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 3) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };
                    request.send(json);
                });
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
                .then(setTimeout(() => {
                    statusMessage.remove();
                }, 2000));

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = ''; 
                }
            }
        });
        // return false;
    }

    let callForm = document.querySelectorAll('form');
        callForm.forEach((item) => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
                formSend(item);
            });
        });

    let tel = document.querySelectorAll('[name = phone]');

    let checkValidSum = input => {
        return /^(8|\+7|\+)\d{0,10}$/.test(input);
    };

    tel.forEach(function (item) {
        item.addEventListener('input', function () {
            if (item != 0) {
                if (!checkValidSum(item.value)) {
                    item.value = item.value.slice(0, -1);
                }
            }
        });
    });

};

module.exports = ajax;