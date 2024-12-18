const form = document.form;
const button = $('#submit');
const statusBody = $('#statusBody');
const statusMessage = $('#statusMessage');
if(form !== undefined) {
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
            const data = {
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                subject: form.subject.value.trim(),
                message: form.message.value.trim(),
            }
            $.ajax({
                type: form.method,
                url: form.action,
                data: data
            })
            .done(() => {success()})
            .fail(() => {error()})
        })
    });
}
