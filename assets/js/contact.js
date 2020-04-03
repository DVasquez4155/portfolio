const form = document.form;
const button = $('#submit');
const statusBody = $('#statusBody');
const statusMessage = $('#statusMessage');

window.addEventListener("DOMContentLoaded", function () {
    // Success and Error functions for after the form is submitted
    function show() {
        statusBody.modal("show");
    }
    function success() {
        form.reset();
        button.attr('style', 'display: none;')
        statusMessage.html("Thank you for taking the time on contacting me!");
        show();
    }

    function error() {
        statusMessage.html("Oops! There was a problem.");
        show();
    }
    // handle the form submission event
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        
    });
    button.click(function () {
        const data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    })
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    console.log(url)
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}