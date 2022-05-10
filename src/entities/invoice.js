function Invoice(date, amount) {
    this.date = date;
    this.amount = amount;
    this._validate();
}

Invoice.prototype._validate = function () {
    let message = []

    if (!this.date instanceof Date) {
        message.push("date param is not Date object")
    }

    if (Number.isNaN(this.amount)) {
        message.push("amount param is not valid number")
    }

    if (message.length > 0) {
        throw new Error(message.join(", "))
    }
}

module.exports = Invoice
