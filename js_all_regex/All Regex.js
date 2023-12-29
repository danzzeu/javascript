const regexx = {
    regexText: /^[a-zA-ZÀ-ÖØ-öø-ÿ ]{2,}$/,
    regexEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    regexNumber: /^\d+$/,
    regexDate: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[1,2])\/(19|20)\d{2}$/,
    regexTime: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
    regexMoney: /^\$?(\d+|\d{1,3}(,\d{3})*)(\.\d{2})?$/,
    regexCPF: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    regexPhone: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
    regexMin: /^.{2,}$/,
    regexMax: /^.{0,8}$/,

    // Minimum eight characters, at least one uppercase letter, 
    // one lowercase letter, one number and one special character
    regexPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
}

// Para pattern do html é só remover os /^ e $/

// regex.test(value);