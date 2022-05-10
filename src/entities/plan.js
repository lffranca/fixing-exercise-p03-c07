function Plan() {
    return Plan;
}

[{
    param: "Basic",
    value: 30
}, {
    param: "Silver",
    value: 20
}, {
    param: "Gold",
    value: 10
}, {
    param: "Platinum",
    value: 5
}].map(function ({param, value}) {
    Object.defineProperty(Plan, param, {
        configurable: false,
        writable: false,
        enumerable: true,
        value: value
    });
})

module.exports = Plan
