const Client = require("../entities/client")
const Invoice = require("../entities/invoice")
const Plan = require("../entities/plan")

function BonusCalculator() {
    this._client = new Client()
    this._invoices = []<Invoice>([])
}

BonusCalculator.prototype._validate = function () {
    let message = []

    if (!this._client instanceof Client) {
        message.push("client param is not Client object")
    }

    if (!Array.isArray(this._invoices)) {
        message.push("invoices param is not Array of Invoice")
    }

    if (this._invoices.length > 0) {
        if (!this._invoices[0] instanceof Invoice) {
            message.push("invoices param is not Array of Invoice")
        }
    }

    if (message.length > 0) {
        throw new Error(message.join(", "))
    }
}

BonusCalculator.prototype._totalAmountOfInvoices = function () {
    return this._invoices.reduce(
        (previousValue, currentValue) => previousValue + currentValue.amount,
        0,
    )
}

BonusCalculator.prototype._calculateBonus = function (plan, invoices_amount) {
    if (!plan instanceof Plan) {
        throw new Error("plan param is not instance of Plan")
    }

    if (Number.isNaN(invoices_amount)) {
        throw new Error("invoices_amount param is not number valid")
    }

    return invoices_amount * (plan.valueOf() / 100)
}

BonusCalculator.prototype.calculateBonusForUser = function (client, invoices) {
    this._client = client
    this._invoices = invoices

    this._validate()

    const invoices_amount = this._totalAmountOfInvoices(invoices)
    return this._calculateBonus(client.plan, invoices_amount)
}

module.exports = BonusCalculator
