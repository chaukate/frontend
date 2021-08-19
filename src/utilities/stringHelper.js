import PropTypes from 'prop-types';

export const formatPhoneNumber = (value) => {
    const cleaned = ("" + value).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return value;
};

formatPhoneNumber.propTypes = {
    value: PropTypes.string,
}

export const formatCurrency = (value, currency = "USD") => {
    const locale = navigator.language || "en-US";
    if (!value || isNaN(Number(value))) value = 0;
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(Number(value));
};

formatCurrency.propTypes = {
    value: PropTypes.string,
    currency: PropTypes.string
}
