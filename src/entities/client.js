const Plan = require("./plan")

function Client(plan) {
    this.plan = plan
    this._validate()
}

Client.prototype._validate = function () {
    if (!this.plan instanceof Plan) {
        throw new Error("plan is not instance of Plan")
    }
}

module.exports = Client
