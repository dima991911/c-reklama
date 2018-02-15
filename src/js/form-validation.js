export function formValid(form) {
    let formGroup = $(form).find('.contacts-form__group'),
        validForm = true;

    [].forEach.call(formGroup, function (element) {
        let validAttr = $(element).attr('data-valid'),
            error = $(element).find('p'),
            value = $(element).find('input').val();

        if(!validAttr) {
            return
        }

        let valid = validElement(value, validAttr);

        if(valid) {
            error.html(valid);
            error.show(100);
            validForm = false;
        } else {
            error.hide(100);
        }
    });

    return validForm;
}

function validElement(value, args) {
    let errorStr = '',
        argsError = args.split('|');

    argsError.forEach(function (errorValid) {
        if(errorValid == 'required') {
            if(value.length < 1) {
                errorStr += 'Це поле обов\'язкове' + '<br>';
            }
        }
        if(errorValid == 'num') {
            let regular = /^[0-9]{8,16}$/;

            if(!regular.test(value)) {
                errorStr += 'Повинні бути тільки цифри(мін 8)' + '<br>';
            }
        }
        if(errorValid == 'text') {
            let regular = /^[A-zа-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$/;

            if(!regular.test(value)) {
                errorStr += 'Тільки текст' + '<br>';
            }
        }
        if(errorValid == 'email') {
            let regular = /(^$|^.*@.*\..*$)/;

            if(!regular.test(value)) {
                errorStr += 'Ведіть коректний email';
            }
        }
    });

    if(!errorStr) {
        return false;
    } else {
        return errorStr;
    }
}

