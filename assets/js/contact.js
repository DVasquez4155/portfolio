button.click(function () {
    const formData = {
        FormId: "10",
        Action: "Submit",
        EntryJson: JSON.stringify({
            $type: "Cognito.Forms.FormEntry.DanielVasquez1.ContactMe",
            x2: null,
            x3: null,
            x4: null,
            x5: null,
            Entry: {
                Action: "Submit",
                Role: "Public",
                Status: "Incomplete",
                IsBeta: true,
                User: {
                    Email: form.email.value.trim(),
                    Name: form.name.value.trim()
                },
                Version: 0
            },
            Form: {
                Id: "10",
                InternalName: "ContactMe",
                Name: "Contact Me"
            },
            Id: null
        }),
        AccessToken: "kLUa767BxyFle2qmQFzHLssBUBuvFGg02GUBRyqio6E$",  // Replace with yours
        EmbedUrl: "https://www.cognitoforms.com/DanielVasquez1/ContactMe",
        OrderAmount: null,
        IsStoragePatch: true,
        IsFormView: false
    };

    $.ajax({
        type: "POST",
        url: "https://www.cognitoforms.com/svc/update-entry/perform-action/new-entry",
        contentType: "application/json+cognito; charset=UTF-8",
        dataType: "json",
        data: JSON.stringify(formData),
        success: function () {
            success();
        },
        error: function () {
            error();
        }
    });
});
