const form = document.form;
const button = $('#submit');
const statusBody = $('#statusBody');
const statusMessage = $('#statusMessage');

window.addEventListener("DOMContentLoaded", function () {
    function show() {
        statusBody.modal("show");
    }
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
    });
    button.click(function () {
        t = $.ajax(form.action, {
            type: "POST",
            data: {
                name: form.name.value.trim(),
                subject: form.subject.value.trim(),
                email: form.email.value.trim(),
                message: form.message.value.trim()
            }
        }).done(() => {
            form.reset();
            button.attr('style', 'display: none;')
            statusMessage.html("Thank you for taking the time on contacting me!");
            show();
        })
        .fail(() => {
            statusMessage.html("Oops! There was a problem.");
            show();
        })
    })
});