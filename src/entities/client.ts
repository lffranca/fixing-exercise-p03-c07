import Plan from "./plan"

class Client {
    private _plan: Plan

    constructor(plan: Plan) {
        this._plan = plan;
    }

    get plan(): Plan {
        return this._plan;
    }

    set plan(value: Plan) {
        this._plan = value;
    }
}

export default Client